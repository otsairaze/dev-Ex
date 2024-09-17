"use client";

import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import React from "react";

interface ReturnProps {
  items: Product[];
}

export const useFilterProducts = (): ReturnProps => {
  const [items, setItems] = React.useState<Product[]>([]);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const items = await Api.filterProducts.getAll();
        setItems(items);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return {
    items,
  };
};
