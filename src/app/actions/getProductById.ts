import prisma from "../../helpers/prismadb";
import { Params } from "../products/[productId]/page";

export default async function getProductById(params: Params) {
  try {
    const { productId } = params;
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        user: true,
      },
    });
    if (!product) return null;
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
}
