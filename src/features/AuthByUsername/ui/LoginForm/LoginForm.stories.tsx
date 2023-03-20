import React, { Suspense } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { LoginForm } from './LoginForm';

export default {
  title: 'featires/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (
  args,
) => (
  <Suspense fallback="">
    <LoginForm {...args} />
  </Suspense>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: '', password: '' },
})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
  loginForm: { username: '', password: '', error: 'ERROR' },
})];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.args = {};
PrimaryWithLoading.decorators = [StoreDecorator({
  loginForm: { isLoading: true },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
  StoreDecorator({
    loginForm: { username: '', password: '' },
  }),
  ThemeDecorator(Theme.DARK),
];
