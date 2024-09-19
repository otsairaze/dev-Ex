import { Product } from "@prisma/client";
import { instance } from "./axios-instance";
import { ApiRoutes } from "./constants";

export const getAll = async (): Promise<Product[]> => {
  return (await instance.get<Product[]>(ApiRoutes.PRODUCTS)).data;
};
