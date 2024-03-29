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
