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
import { useFilterProducts } from "@/hooks/use-filter-products";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Выберите категорию" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Производитель</AccordionTrigger>
            <AccordionContent className="flex flex-col align-center gap-5">
              <FilterCheckbox text="Можно собирать" value="1" />
              <FilterCheckbox text="Новинки" value="2" />
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
                  max={30000}
                  defaultValue={0}
                />
                <Input
                  type="number"
                  placeholder="30000"
                  min={100}
                  max={30000}
                  defaultValue={0}
                />
              </div>
              <RangeSlider min={0} max={30000} step={100} value={[0, 30000]} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Видеокарты</AccordionTrigger>
            <AccordionContent>
              <CheckboxFiltersGroup
                className="mt-5"
                limit={6}
                defaultItems={[
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080 Super",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Ti Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080 Super",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Ti Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                ]}
                items={[
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080 Super",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Ti Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080 Super",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4080",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Ti Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4070 Super ",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                  {
                    text: "GeForce RTX 4090",
                    value: "1",
                  },
                ]}
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
