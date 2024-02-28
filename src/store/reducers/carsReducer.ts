import { ICar } from "@/types/ICar"
import { CarActionType, CarActionTypes } from "../../types/CarActionTypes";

interface IState {
  cars: ICar[];
}

const initialState: IState = {
  cars: []
}

export const carsReducer = (state = initialState, action: CarActionType): IState => {
  switch (action.type) {
    case CarActionTypes.SET_CARS:
      return {
        ...state,
        cars: action.payload
      }
  
    default:
      return state;
  }
}