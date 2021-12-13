import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const makeStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
export const store = makeStore();
export const wrapper = createWrapper(makeStore);
