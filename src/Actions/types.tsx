import { Action } from "redux";
import { Product } from "../reducers/productReducer";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const FETCH_FAILURE = "FETCH_FAILURE";

export interface FetchProductAction extends Action<typeof FETCH_PRODUCTS> {
  payload: Product;
}
export interface DeleteProductAction extends Action<typeof DELETE_PRODUCT> {
  payload: Product["productId"];
}
export type FetchFailureAction = Action<typeof FETCH_FAILURE>;
