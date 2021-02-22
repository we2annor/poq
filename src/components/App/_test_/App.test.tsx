import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { render, cleanup } from "@testing-library/react";
import { rootReducer } from "../../../reducers";
import App from "../App";

afterEach(cleanup);

describe("When rendered", () => {
  test("should render App successfully", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("should have a content", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("app").hasChildNodes).toBeTruthy();
  });
});
