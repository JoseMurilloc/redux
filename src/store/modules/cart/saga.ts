import { ActionTypes } from './types';
import { IState } from './../../index';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSussec } from './actions';
import api from '../../../services/api';
import { AxiosResponse } from 'axios';

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;
  
  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  });

  const availableStockResponse : AxiosResponse<IStockResponse> = 
    yield call(api.get, `stock/${product.id}`)

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSussec(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }


  console.log(currentQuantity)
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]); 