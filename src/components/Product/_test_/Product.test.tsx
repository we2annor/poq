import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import { rootReducer } from "../../../reducers";
import ProductItem from "../Product";
import { Product } from "../../../reducers/productReducer";

afterEach(cleanup);

const product: Product = {
  productId: 1,
  name: "Dress 1",
  description: "A nice dredd",
  price: 12,
  priceWas: 15,
  available: true,
  quantity: 127,
  lowOnStock: false,
  promotionBadge: "30% OFF",
  imageUrl: "url/test.com",
};

const getSelectedProducts = (selectedProduct: HTMLInputElement) => {
  console.log(selectedProduct);
};

describe("When ProdcutItem Mounts", () => {
  test("Should Renders successfully", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <ProductItem
          product={product}
          getSelectedProducts={getSelectedProducts}
        />
      </Provider>
    );
  });

  test("Matches snapshot", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const tree = renderer.create(
      <Provider store={store}>
        <ProductItem
          product={product}
          getSelectedProducts={getSelectedProducts}
        />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
