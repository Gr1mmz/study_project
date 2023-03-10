import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';

import { StateScheme } from './stateScheme';

export function createReduxStore(initialState?: StateScheme) {
  return configureStore<StateScheme>({
    reducer: { counter: counterReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}