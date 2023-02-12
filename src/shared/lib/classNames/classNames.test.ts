import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass newClass newClass2';
    expect(classNames('someClass', {}, ['newClass', 'newClass2']))
      .toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass newClass newClass2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['newClass', 'newClass2'],
    )).toBe(expected);
  });

  test('with false mode', () => {
    const expected = 'someClass newClass newClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['newClass', 'newClass2'],
    )).toBe(expected);
  });

  test('with undefined mode', () => {
    const expected = 'someClass newClass newClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['newClass', 'newClass2'],
    )).toBe(expected);
  });
});