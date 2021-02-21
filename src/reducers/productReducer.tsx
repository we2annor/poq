import _ from "lodash";
import {
  FetchProductAction,
  DeleteProductAction,
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
} from "../Actions/types";

export interface ProductState {
  products: Product[];
}

export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  priceWas: number;
  available: boolean;
  quantity: number;
  lowOnStock: boolean;
  promotionBadge: string;
  imageUrl: string;
}
const initialState: ProductState = {
  products: [],
};

export const productReducer = (
  state: ProductState = initialState,
  action: FetchProductAction | DeleteProductAction
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state.products, ..._.mapKeys(action.payload, "productId") };
    case DELETE_PRODUCT:
      const newProducts = Object.values(state);
      const filteredList = newProducts.filter(
        (product) => product.productId !== action.payload
      );
      return {
        ...filteredList,
      };
    default:
      return state;
  }
};
