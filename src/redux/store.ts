import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware] as const;

const store = configureStore({
  reducer: combinedReducers,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
