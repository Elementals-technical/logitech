import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.js';
import thunk from 'redux-thunk';
import { middleware } from './middleware/middleware.ts';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
);

export default store;
