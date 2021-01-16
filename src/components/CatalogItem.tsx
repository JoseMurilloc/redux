import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}
const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hashFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.checkFailStockProduct.includes(product.id)
  })

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  },[dispatch, product])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <strong>{product.price}</strong> {" "}

      <button
        type="button"
        onClick={handleAddToCart}
      >
        Comprar
      </button>

      { hashFailedStockCheck && (
        <span style={{ color: 'red' }}>
          Falta de estoque
        </span>
      )}
    </article>
  )
}

export default CatalogItem;