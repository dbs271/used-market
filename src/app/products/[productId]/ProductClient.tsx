"use client";

import { Product, User } from "@prisma/client";

interface ProductClientProps {
  product: Product & { user: User };
  currentUser?: User | null;
}

const ProductClient = ({ product, currentUser }: ProductClientProps) => {
  return <div>Product</div>;
};

export default ProductClient;
