import { ICar } from "@/types/ICar";
import { CarActionTypes, IDeleteCarAction } from "../../types/CarActionTypes";

export const deleteCar = (carId: number): IDeleteCarAction => {
  return {
    type: CarActionTypes.DELETE_CAR,
    payload: carId
  }
}