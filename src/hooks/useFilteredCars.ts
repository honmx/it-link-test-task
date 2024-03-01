import { useTypedSelector } from "@/store/hooks";
import { ICar } from "@/types/ICar";
import { IFilter } from "@/types/IFilter";
import { useEffect, useState } from "react";

export const useFilteredCars = () => {

  const carsFromStore = useTypedSelector(state => state.cars.cars);
  const filters = useTypedSelector(state => state.filters.filters);

  const [cars, setFilteredCars] = useState<ICar[]>(carsFromStore);

  useEffect(() => {
    const filteredCars = carsFromStore
      .filter(car => car.technical_characteristics?.brand ? car.technical_characteristics.brand.toLowerCase().includes(filters.brand?.toLowerCase() || "") : true)
      .filter(car => car.technical_characteristics?.model ? car.technical_characteristics.model.toLowerCase().includes(filters.model?.toLowerCase() || "") : true)
      .filter(car => filters.productionYear ? car.technical_characteristics?.productionYear === filters.productionYear : true)
      .filter(car => car.technical_characteristics?.body ? car.technical_characteristics.body.toLowerCase().includes(filters.body?.toLowerCase() || "") : true)
      .filter(car => filters.minMileage ? (car.technical_characteristics?.mileage || -1) >= filters.minMileage : true)
      .filter(car => filters.maxMileage ? (car.technical_characteristics?.mileage || Infinity) <= filters.maxMileage : true)
      .filter(car => filters.minPrice ? car.price >= filters.minPrice : true)
      .filter(car => filters.maxPrice ? car.price <= filters.maxPrice : true);

    setFilteredCars(filteredCars);
  }, [filters]);

  return cars;
}