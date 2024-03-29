import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (
  args,
) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  loginForm: { username: '', password: '' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  StoreDecorator({
    loginForm: { username: '', password: '' },
  }),
  ThemeDecorator(Theme.DARK),
];
