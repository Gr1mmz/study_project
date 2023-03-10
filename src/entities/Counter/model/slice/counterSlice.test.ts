import { CounterScheme } from 'entities/Counter';

import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterScheme = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement))
      .toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: CounterScheme = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment))
      .toEqual({ value: 11 });
  });

  test('with an empty state', () => {
    expect(counterReducer(undefined, counterActions.increment))
      .toEqual({ value: 1 });
  });
});