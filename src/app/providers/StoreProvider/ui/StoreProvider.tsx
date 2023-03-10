import { ReactNode } from 'react';

import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider/config/stateScheme';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateScheme>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateScheme);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};