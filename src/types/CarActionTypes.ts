import { ICar } from "@/types/ICar";

export enum CarActionTypes {
  SET_CARS = "SET_CARS",
  CREATE_CAR = "CREATE_CAR",
  DELETE_CAR = "DELETE_CAR"
}

export interface ISetCarsAction {
  type: CarActionTypes.SET_CARS;
  payload: ICar[];
}

export interface ICreateCarAction {
  type: CarActionTypes.CREATE_CAR;
  payload: ICar;
}

export interface IDeleteCarAction {
  type: CarActionTypes.DELETE_CAR;
  payload: number;
}

export type CarActionType = ISetCarsAction | ICreateCarAction | IDeleteCarAction;