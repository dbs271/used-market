import axios from "axios";
import { User } from "@prisma/client";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

interface UseFavorite {
  productId: string;
  currentUser?: User | null;
}

const useFavorite = ({ productId, currentUser }: UseFavorite) => {
  const router = useRouter();
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!currentUser) return;
    try {
      let req;
      if (hasFavorite) {
        req = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        req = () => axios.post(`/api/favorites/${productId}`);
      }
      await req();
      router.refresh();
    } catch (error) {}
  };

  return {
    hasFavorite,
    toggleFavorite,
  };
};

export default useFavorite;
