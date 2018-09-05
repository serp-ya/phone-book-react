import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

import middlewares from '../middlewares/';

const enhancer = applyMiddleware(...middlewares);
const store = createStore(reducers, enhancer);

export default store;