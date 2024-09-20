import { Api } from "@/services/api-client";
import { Category, Product } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

type ProductItem = Pick<Product, "categoryId" | "name">;
interface ReturnProps {
  items: ProductItem[];
  selectedIds: Set<string>;
  onToggleId: (id: string) => void;
}

export const useFilterProducts = (): ReturnProps => {
  const [items, setItems] = React.useState<ProductItem[]>([]);

  const [selectedIds, { toggle }] = useSet(new Set<string>());
  React.useEffect(() => {
    async function fetchCategory() {
      try {
        const category = await Api.filterProducts.getAll();
        setItems(
          category.map((item) => ({ categoryId: item.id, name: item.name }))
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategory();
  }, []);

  return {
    items,
    onToggleId: toggle,
    selectedIds,
  };
};
