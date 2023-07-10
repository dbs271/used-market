"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill, GiIsland, GiBoatFishing } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import CategoryBox from "./CategoryBox";

export const categories = [
  {
    label: "디지털기기",
    path: "digital",
    icon: TbBeach,
    decription: "디지털기기 카테고리입니다.",
  },
  {
    label: "생활가전",
    path: "appliances",
    icon: GiWindmill,
    decription: "생활가전 카테고리입니다.",
  },
  {
    label: "가구/인테리어",
    path: "interior",
    icon: MdOutlineVilla,
    decription: "가구/인테리어 카테고리입니다.",
  },
  {
    label: "여성의류",
    path: "women-clothing",
    icon: TbMountain,
    decription: "여성의류 카테고리입니다.",
  },
  {
    label: "남성패션/잡화",
    path: "men-fashion",
    icon: TbPool,
    decription: "남성패션/잡화 카테고리입니다.",
  },
  {
    label: "뷰티/미용",
    path: "beauty",
    icon: GiIsland,
    decription: "뷰티/미용 카테고리입니다.",
  },
  {
    label: "스포츠/레저",
    path: "sports",
    icon: GiBoatFishing,
    decription: "스포츠/레저 카테고리입니다.",
  },
  {
    label: "중고차",
    path: "used-car",
    icon: FaSkiing,
    decription: "중고차 카테고리입니다.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  return (
    <div className="flex flex-row tiems-center justify-between pt-4 overflow-x-auto">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label}
          path={item.path}
          icon={item.icon}
          selected={category === item.path}
        />
      ))}
    </div>
  );
};

export default Categories;
