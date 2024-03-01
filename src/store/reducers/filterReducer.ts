import { ICar } from "@/types/ICar"
import { CarActionType, CarActionTypes } from "../../types/CarActionTypes";
import { IFilter } from "@/types/IFilter";
import { FilterActionType, FilterActionTypes } from "@/types/FilterActionTypes";

interface IState {
  filters: IFilter;
}

const initialState: IState = {
  filters: {}
}

export const filtersReducer = (state = initialState, action: FilterActionType): IState => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTERS:
      return {
        ...state,
        filters: action.payload
      }

    default:
      return state;
  }
}