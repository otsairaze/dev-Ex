import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const filter = await prisma.product.findMany();

  return NextResponse.json(filter);
}
