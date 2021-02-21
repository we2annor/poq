import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProduct, deleteProduct } from "../../Actions/index";
import { ProductState, Product } from "../../reducers/productReducer";
import ProductItem from "../Product/Product";

interface Props {
  products: Product[];
  fetchProduct: () => void;
  deleteProduct: (id: number) => void;
}

const ProductList: React.FC<Props> = ({
  products,
  fetchProduct,
  deleteProduct,
}) => {
  const [selected, setSelected] = useState(0);
  const [selectedProductList, setSelectedProductList] = useState<string[]>([]);

  useEffect(() => {
    const loadProducts = () => {
      fetchProduct();
    };

    loadProducts();
  }, [fetchProduct]);

  const getSelectedProducts = (product: HTMLInputElement) => {
    const { id, checked } = product;
    if (checked) {
      if (selectedProductList.indexOf(id) === -1) {
        setSelected(selected + 1);
        setSelectedProductList((selectedProductList) => [
          ...selectedProductList,
          id,
        ]);
      }
    } else {
      if (selectedProductList.indexOf(id) !== -1) {
        setSelected(selected - 1);
        setSelectedProductList(
          selectedProductList.filter((product) => product !== id)
        );
      }
    }
  };

  const onRemoveButtonClicked = () => {
    setSelectedProductList([]);
    setSelected(0);
    return selectedProductList.map((product) =>
      deleteProduct(parseInt(product))
    );
  };

  return (
    <>
      {selected > 0 && (
        <button
          className='product-list__selected-btn'
          onClick={onRemoveButtonClicked}
        >{`Remove ${selected > 0 ? selected : ""} selected product${
          selected > 1 ? "s" : ""
        }`}</button>
      )}

      <div className='product-list'>
        {products.map((product, index) => (
          <div key={index}>
            <ProductItem
              getSelectedProducts={getSelectedProducts}
              product={product}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const matchPropsToState = (state: ProductState) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(matchPropsToState, { fetchProduct, deleteProduct })(
  ProductList
);
