import { ICar } from "@/types/ICar";
import { CarActionTypes, ISetCarsAction } from "../../types/CarActionTypes";

export const setCars = (cars: ICar[]): ISetCarsAction => {
  return {
    type: CarActionTypes.SET_CARS,
    payload: cars
  }
}