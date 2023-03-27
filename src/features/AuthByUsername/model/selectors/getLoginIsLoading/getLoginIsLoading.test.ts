import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateScheme> = {
      loginForm: {
        isLoading: false,
      },
    };

    expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
  });

  test('with empty state - false', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
  });
});