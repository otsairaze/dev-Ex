"use client";

import React from "react";
import { Title } from "./title";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilters, useProductFilters, useQueryFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { items } = useProductFilters();
  const filters = useFilters();

  useQueryFilters(filters);

  const itemsProduct = items.map((item) => ({
    text: item.name,
    value: String(item.categoryId),
  }));

  return (
    <div className={className}>
      <Title text="Выберите категорию" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Производитель</AccordionTrigger>
            <AccordionContent className="flex flex-col align-center gap-5">
              <CheckboxFiltersGroup
                name="producerTypes"
                className="mb-5"
                onClickCheckbox={filters.setTypes}
                selectedIds={filters.producerTypes}
                items={[
                  {
                    text: "NVIDIA",
                    value: "1",
                  },
                  {
                    text: "INTEL",
                    value: "2",
                  },
                  {
                    text: "AMD",
                    value: "3",
                  },
                ]}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Цена</AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-3 mb-5">
                <Input
                  type="number"
                  placeholder="0"
                  min={0}
                  max={95000}
                  defaultValue={0}
                  value={String(prices.priceFrom)}
                  onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
                />
                <Input
                  type="number"
                  placeholder="30000"
                  min={100}
                  max={95000}
                  defaultValue={0}
                  value={String(prices.priceTo)}
                  onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
                />
              </div>
              <RangeSlider min={0} max={95000} step={100} value={[]} onValueChange={(value) => setPrice({ priceFrom: value[0], priceTo: value[1] })} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Товары</AccordionTrigger>
            <AccordionContent className="max-w-xs overflow-auto">
              <CheckboxFiltersGroup
                className="mt-5"
                limit={6}
                name="Товары"
                defaultItems={itemsProduct.map((item) => ({
                  text: item.text,
                  value: item.value,
                }))}
                items={itemsProduct}
                onClickCheckbox={onToggleId}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
