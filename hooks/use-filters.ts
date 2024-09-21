import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

export interface QueryFilters extends PriceProps {
  items: string;
  producerTypes: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  producerTypes: Set<string>;
  selectedProduct: Set<string>;
  prices: PriceProps;
  setProducts: (id: string) => void;
  setTypes: (id: string) => void;
  setPrices: (name: keyof PriceProps, value: number) => void;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setProducts: (value: string) => void;
  setTypes: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedProduct, { toggle: toggleProduct }] = useSet(new Set<string>(searchParams.get("items")?.split(",")));
  const [producerTypes, { toggle: toggleProducerTypes }] = useSet(
    new Set<string>(searchParams.get("producerTypes") ? searchParams.get("producerTypes")?.split(",") : [])
  );
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prices,
      [name]: value,
    }));
  };

  return {
    producerTypes,
    selectedProduct,
    prices,
    setPrices: updatePrice,
    setProducts: toggleProduct,
    setTypes: toggleProducerTypes,
  };
};
