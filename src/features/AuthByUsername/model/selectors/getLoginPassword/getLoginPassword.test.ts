import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        password: '123',
      },
    };

    expect(getLoginPassword(state as StateScheme)).toEqual('123');
  });

  test('with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getLoginPassword(state as StateScheme)).toEqual('');
  });
});