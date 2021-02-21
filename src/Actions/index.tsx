import {
  FETCH_PRODUCTS,
  FETCH_FAILURE,
  FetchProductAction,
  FetchFailureAction,
  DELETE_PRODUCT,
} from "./types";
import { products } from "../api/poq";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/index";
import { DeleteProductAction } from "./types";

export const fetchProduct = (): ThunkAction<
  void,
  RootState,
  undefined,
  FetchProductAction | FetchFailureAction
> => async (dispatch) => {
  try {
    const response = await products.get(
      "/fca7ef93-8d86-4574-9a4a-3900d91a283e"
    );
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_FAILURE,
      payload: "Failed to load Products",
    });
  }
};

export const deleteProduct = (
  id: number
): ThunkAction<
  void,
  RootState,
  undefined,
  FetchProductAction | DeleteProductAction
> => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};
