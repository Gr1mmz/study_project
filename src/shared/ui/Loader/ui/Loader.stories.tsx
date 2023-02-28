import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (
  args,
) => <Loader {...args} />;

export const LoaderPrimary = Template.bind({});
LoaderPrimary.args = {};

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
