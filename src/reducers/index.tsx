import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({ products: productReducer });
