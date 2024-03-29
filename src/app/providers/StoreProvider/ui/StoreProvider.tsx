import { ReactNode } from 'react';

import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider/config/stateScheme';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScheme>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateScheme,
    asyncReducers as ReducersMapObject<StateScheme>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};