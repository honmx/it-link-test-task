import { IFilter } from "./IFilter";

export enum FilterActionTypes {
  SET_FILTERS = "SET_FILTERS"
}

export interface ISetFiltersAction {
  type: FilterActionTypes.SET_FILTERS;
  payload: IFilter;
}



export type FilterActionType = ISetFiltersAction;