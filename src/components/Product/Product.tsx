import React, { useEffect, useState } from "react";
import { Product } from "../../reducers/productReducer";
import CheckBox from "../CheckBox/CheckBox";
import { LazyLoad } from "../LazyLoad/LazyLoad";

interface Props {
  product: Product;
  getSelectedProducts: (selected: HTMLInputElement) => void;
}
const ProductItem: React.FC<Props> = ({ product, getSelectedProducts }) => {
  const [checkBoxValue, setCheckboxValue] = useState(false);

  useEffect(() => {
    setCheckboxValue(false);
  }, [product]);

  const onCheckBoxClicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    getSelectedProducts(e.currentTarget);
    setCheckboxValue(!checkBoxValue);
  };

  if (!product) {
    return <div>No products available.</div>;
  }

  return (
    <div className='product'>
      <span className='product__checkBox'>
        <CheckBox
          name={product.productId ? product.productId.toString() : ""}
          id={product.productId ? product.productId.toString() : ""}
          checked={checkBoxValue}
          onChange={(e) => onCheckBoxClicked(e)}
        />
      </span>
      <div className='product__img-wrapper'>
        <LazyLoad src={product.imageUrl} alt={product.name} />
        {product.promotionBadge && (
          <div className='product__promotionBadge'>
            {product.promotionBadge}
          </div>
        )}
      </div>
      <div className='product__info'>
        <div className='product__info--name'>{product.name}</div>
        <div className='product__info--price'>
          &pound;{product.price} <span>&pound;{product.priceWas}</span>
        </div>
        <div>
          {product.quantity > 0 ? (
            <span className='in-stock'>{product.quantity} in stock</span>
          ) : (
            ""
          )}
        </div>
        <span>
          {product.quantity === 1 && product.lowOnStock ? (
            <span className='low-on-stock'> Low on stock</span>
          ) : product.lowOnStock && product.quantity > 1 ? (
            ""
          ) : (
            <span className='out-of-stock'>Out of stock</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
