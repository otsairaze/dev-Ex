import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui";
import { Menu } from "lucide-react";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categories = [
    {
      name: "Ноутбуки",
    },
    {
      name: "Телевизоры",
    },
    {
      name: "Компьютеры",
    },
    {
      name: "Фотоаппараты",
    },
    {
      name: "Телефоны",
    },
    // {
    //   name: "Комплектующие ПК",
    // },
    // {
    //   name: "Авто-товары",
    // },
    // {
    //   name: "Товары для дома",
    // },
  ];
  const activeIndex = 0;
  return (
    <div
      className={cn("flex items-center justify-between gap-10 p-1 rounded-2xl")}
    >
      <Menu className="cursor-pointer" />
      {categories.map((category, index) => (
        <a
          className={cn(
            "flex items-center font-bold rounded-2xl h-11 px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
          href=""
        >
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
