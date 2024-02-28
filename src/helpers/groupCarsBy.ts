import { ICar } from "@/types/ICar";

export const groupCarsBy = (cars: ICar[], by: number) => {
  const result = [];
  
  for (let i = 0; i < cars.length; i += by) {
    result.push(cars.slice(i, i + by));
  }

  return result;
}