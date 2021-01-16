import { IProduct } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product
    }
  }
}

export function addProductToCartSussec(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCESS',
    payload: {
      product
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId
    }
  }
}