import { DeepPartial } from '@reduxjs/toolkit';

import { loginActions, loginReducer } from '../slice/loginSlice';
import { LoginScheme } from '../types/loginScheme';

describe('loginSlice test', () => {
  test('set username', () => {
    const state: DeepPartial<LoginScheme> = { username: '123' };
    expect(loginReducer(
      state as LoginScheme,
      loginActions.setUsername('admin'),
    )).toStrictEqual({ username: 'admin' });
  });

  test('set password', () => {
    const state: DeepPartial<LoginScheme> = { password: '123' };
    expect(loginReducer(
      state as LoginScheme,
      loginActions.setPassword('admin'),
    )).toStrictEqual({ password: 'admin' });
  });
});