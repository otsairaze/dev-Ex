import { cn } from "@/lib/utils";
import React from "react";

import Image from "next/image";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={44} height={44} />
          <div>
            <h1 className="text-2xl font-black">DevEx</h1>
            <p className="text-sm leading-3">магазин техники</p>
          </div>
        </div>

        <div className="flex items-center gap-8 ">
          <Button variant={"ghost"} className="gap-2">
            <User />
            Войти
          </Button>

          <div>
            <Button variant={"ghost"} className="group relative">
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-black/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="w-4 h-4 relative" />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
