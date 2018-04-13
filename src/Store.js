import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = [];
const middleware = [thunk];
const store = createStore(rootreducer, initialState, applyMiddleware(...middleware));

//const store = createStore(() => [], {}, applyMiddleware());     

export default store;