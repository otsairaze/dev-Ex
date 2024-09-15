"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui";
import { Menu } from "lucide-react";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categories = [
    { id: 1, name: "Видеокарты" },
    { id: 2, name: "Процессоры" },
    { id: 3, name: "Компьютеры" },
    { id: 4, name: "Фотоаппараты" },
    { id: 5, name: "Телефоны" },
    { id: 6, name: "Ноутбуки" },
  ];

  const activeIndex = 0;

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("flex items-center justify-between gap-10 p-1 rounded-2xl")}
    >
      <Menu className="cursor-pointer" />
      {categories.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold rounded-2xl h-11 px-5",
            categoryActiveId === index + 1 &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
