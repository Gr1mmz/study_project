import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

import type { StateScheme, ReduxStoreWithManager } from './config/stateScheme';

export {
  StoreProvider, createReduxStore, StateScheme, ReduxStoreWithManager, AppDispatch,
};