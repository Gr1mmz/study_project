import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        username: 'admin',
      },
    };

    expect(getLoginUsername(state as StateScheme)).toEqual('admin');
  });

  test('with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getLoginUsername(state as StateScheme)).toEqual('');
  });
});