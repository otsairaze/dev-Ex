import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      producerTypes: Array.from(filters.producerTypes),
      products: Array.from(filters.selectedProduct),
    };

    const query = qs.stringify({
      arrayFormat: "comma",
    });
    router.push(`?${query}`);
  }, [filters, router]);
};
