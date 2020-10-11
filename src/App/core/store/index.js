import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducer';
import { rootSaga } from '../saga';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

sagaMiddleware.run(rootSaga);