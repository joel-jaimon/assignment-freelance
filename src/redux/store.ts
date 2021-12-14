import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware] as const;

const store = configureStore({
  reducer: combinedReducers,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
