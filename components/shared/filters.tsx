import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Input } from "../ui";

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
            <AccordionContent className="flex gap-3 mb-5">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
