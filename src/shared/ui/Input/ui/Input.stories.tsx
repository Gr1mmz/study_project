import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'Text',
  label: 'Input Label',
  placeholder: 'Type something...',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  id: 'Text',
  label: 'Input Label',
  placeholder: 'Type something...',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const Clear = Template.bind({});
// Clear.args = {
//   children: 'Text',
//   theme: ButtonTheme.CLEAR,
// };
//
// export const Outline = Template.bind({});
// Outline.args = {
//   children: 'Text',
//   theme: ButtonTheme.OUTLINE,
// };
//
// export const OutlineSizeL = Template.bind({});
// OutlineSizeL.args = {
//   children: 'Text',
//   theme: ButtonTheme.OUTLINE,
//   size: ButtonSize.L,
// };
//
// export const OutlineSizeXL = Template.bind({});
// OutlineSizeXL.args = {
//   children: 'Text',
//   theme: ButtonTheme.OUTLINE,
//   size: ButtonSize.XL,
// };
//
// export const PrimaryDark = Template.bind({});
// PrimaryDark.args = {
//   children: 'Text',
// };
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const ClearDark = Template.bind({});
// ClearDark.args = {
//   children: 'Text',
//   theme: ButtonTheme.CLEAR,
// };
// ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//   children: 'Text',
//   theme: ButtonTheme.OUTLINE,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const BackgroundTheme = Template.bind({});
// BackgroundTheme.args = {
//   children: 'Text',
//   theme: ButtonTheme.BACKGROUND,
// };
//
// export const BackgroundInverted = Template.bind({});
// BackgroundInverted.args = {
//   children: 'Text',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
// };
//
// export const BackgroundThemeDark = Template.bind({});
// BackgroundThemeDark.args = {
//   children: 'Text',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
// };
// BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const BackgroundInvertedDark = Template.bind({});
// BackgroundInvertedDark.args = {
//   children: 'Text',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
// };
// BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
//
// export const Square = Template.bind({});
// Square.args = {
//   children: '»',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
// };
//
// export const SquareSizeL = Template.bind({});
// SquareSizeL.args = {
//   children: '»',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
//   size: ButtonSize.L,
// };
//
// export const SquareSizeXL = Template.bind({});
// SquareSizeXL.args = {
//   children: '»',
//   theme: ButtonTheme.BACKGROUND_INVERTED,
//   square: true,
//   size: ButtonSize.XL,
// };
