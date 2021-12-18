
import { applyMiddleware, combineReducers, createStore } from 'redux'
import products from './ducks/products'
import ReduxThunk from 'redux-thunk';

const reducers = {
    products
}

const combinedReducers =  combineReducers(reducers)

const store = createStore(combinedReducers, {}, applyMiddleware(ReduxThunk));

export default store

