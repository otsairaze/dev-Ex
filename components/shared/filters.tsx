"use client";

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Input, Slider } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useSet } from "react-use";
import { useFilterProducts } from "@/hooks/use-filter-products";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { items: products } = useFilterProducts();

  const items = products.map((item) => ({
    text: item.name,
    value: String(item.categoryId),
  }));

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 95000,
  });

  const [producerTypes, { toggle: toggleProducerTypes }] = useSet(
    new Set<string>([])
  );

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({
      ...prices,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    console.log();
  }, [prices, producerTypes]);

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
                onClickCheckbox={toggleProducerTypes}
                selected={producerTypes}
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
                  onChange={(e) =>
                    updatePrice("priceFrom", Number(e.target.value))
                  }
                />
                <Input
                  type="number"
                  placeholder="30000"
                  min={100}
                  max={95000}
                  defaultValue={0}
                  value={String(prices.priceTo)}
                  onChange={(e) =>
                    updatePrice("priceTo", Number(e.target.value))
                  }
                />
              </div>
              <RangeSlider
                min={0}
                max={95000}
                step={100}
                value={[prices.priceFrom, prices.priceTo]}
                onValueChange={(value) =>
                  setPrice({ priceFrom: value[0], priceTo: value[1] })
                }
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Видеокарты</AccordionTrigger>
            <AccordionContent>
              <CheckboxFiltersGroup
                className="mt-5"
                limit={6}
                defaultItems={items.map((item) => ({
                  text: item.text,
                  value: item.value,
                }))}
                items={items}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Процессоры</AccordionTrigger>
            <AccordionContent>
              <CheckboxFiltersGroup
                className="mt-5"
                limit={6}
                defaultItems={[
                  {
                    text: "Intel Core i9-13900K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 9 7950X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i7-13700K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 7 7700X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i5-13600K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 5 7600X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i9-12900K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 9 5900X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i7-12700K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 7 5800X",
                    value: "1",
                  },
                ]}
                items={[
                  {
                    text: "Intel Core i9-13900K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 9 7950X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i7-13700K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 7 7700X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i5-13600K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 5 7600X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i9-12900K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 9 5900X",
                    value: "1",
                  },
                  {
                    text: "Intel Core i7-12700K",
                    value: "1",
                  },
                  {
                    text: "AMD Ryzen 7 5800X",
                    value: "1",
                  },
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
