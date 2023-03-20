import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
  title: 'Lorem ipsum dolor sit amet',
};

export const PrimaryTitleDark = Template.bind({});
PrimaryTitleDark.args = {
  title: 'Lorem ipsum dolor sit amet',
};
PrimaryTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur '
    + 'adipiscing elit. Praesent vel finibus massa. '
    + 'Mauris vel purus aliquam massa iaculis pellentesque. '
    + 'Pellentesque sagittis molestie lacus, at tristique '
    + 'ante molestie vel. Pellentesque sodales aliquam '
    + 'risus, vitae euismod libero vestibulum sed. '
    + 'Class aptent taciti sociosqu ad litora torquent '
    + 'per conubia nostra, per inceptos himenaeos. '
    + 'Aenean molestie imperdiet nibh non placerat. '
    + 'Donec quis lectus sed lorem dignissim volutpat '
    + 'viverra ac nisi. Phasellus scelerisque elit '
    + 'sed felis commodo tincidunt. Praesent faucibus '
    + 'eros sed mi facilisis pellentesque. Mauris lacinia '
    + 'viverra mauris in consectetur. Cras semper neque '
    + 'ac ipsum accumsan aliquam. Donec in lectus quam. '
    + 'Duis malesuada diam est, et blandit libero luctus '
    + 'at. Phasellus at nunc vitae orci malesuada commodo. '
    + 'Quisque quis tellus odio. Aliquam molestie mauris '
    + 'ut nibh volutpat luctus.',
};

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur '
    + 'adipiscing elit. Praesent vel finibus massa. '
    + 'Mauris vel purus aliquam massa iaculis pellentesque. '
    + 'Pellentesque sagittis molestie lacus, at tristique '
    + 'ante molestie vel. Pellentesque sodales aliquam '
    + 'risus, vitae euismod libero vestibulum sed. '
    + 'Class aptent taciti sociosqu ad litora torquent '
    + 'per conubia nostra, per inceptos himenaeos. '
    + 'Aenean molestie imperdiet nibh non placerat. '
    + 'Donec quis lectus sed lorem dignissim volutpat '
    + 'viverra ac nisi. Phasellus scelerisque elit '
    + 'sed felis commodo tincidunt. Praesent faucibus '
    + 'eros sed mi facilisis pellentesque. Mauris lacinia '
    + 'viverra mauris in consectetur. Cras semper neque '
    + 'ac ipsum accumsan aliquam. Donec in lectus quam. '
    + 'Duis malesuada diam est, et blandit libero luctus '
    + 'at. Phasellus at nunc vitae orci malesuada commodo. '
    + 'Quisque quis tellus odio. Aliquam molestie mauris '
    + 'ut nibh volutpat luctus.',
};
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
  text: 'Something went wrong',
  theme: TextTheme.ERROR,
};

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
  text: 'Something went wrong',
  theme: TextTheme.ERROR,
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];
