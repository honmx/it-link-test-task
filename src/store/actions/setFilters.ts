import { FilterActionTypes, ISetFiltersAction } from "@/types/FilterActionTypes"
import { IFilter } from "@/types/IFilter"

export const setFilters = (filters: IFilter): ISetFiltersAction => {
  return {
    type: FilterActionTypes.SET_FILTERS,
    payload: filters
  }
}