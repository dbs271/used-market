import prisma from "../../helpers/prismadb";

export interface ProductsParams {
  latitude?: number;
  longitude?: number;
  category?: string;
  page?: number;
  skip?: number;
}

export default async function getProducts(params: ProductsParams) {
  try {
    const { latitude, longitude, category } = params;
    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (latitude) {
      query.latitude = {
        gte: Number(latitude) - 0.01,
        lte: Number(longitude) + 0.01,
      };
    }
    const totalItems = await prisma.product.count({ where: query });
    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createAt: "desc",
      },
    });
    return {
      data: products,
      totalItems,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
