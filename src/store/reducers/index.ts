import { combineReducers } from "redux";
import { carsReducer } from "./carsReducer";
import { filtersReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  cars: carsReducer,
  filters: filtersReducer
});

export type RootState = ReturnType<typeof rootReducer>;