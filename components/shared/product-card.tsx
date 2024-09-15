import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
  imageUrl: string;
  price: number;
  name: string;
  id: number;
}

export const ProductCard: React.FC<Props> = ({
  className,
  imageUrl,
  id,
  price,
  name,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 rounded-lg h-[260px] border">
          <img src={imageUrl} className="w-[170px] h-[170px]" alt={name} />
        </div>

        <Title text={name} size="xs" className="mb-1 mt-3 font-bold" />

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            <b>{price} ₽</b>
          </span>

          <Button variant={"secondary"}>
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
