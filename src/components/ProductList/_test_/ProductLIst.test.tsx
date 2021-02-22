import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import { rootReducer } from "../../../reducers";
import ProductList from "../ProductList";

afterEach(cleanup);

// const observe = jest.fn();

// window.IntersectionObserver = jest.fn(function () {
//   this.observe = observe;
// });

describe("When ProductList Mounts", () => {
  test("Shoult render successfully", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  });

  test("Matches snapshot", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const tree = renderer.create(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
