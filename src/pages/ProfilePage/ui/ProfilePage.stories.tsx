import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (
  args,
) => <ProfilePage {...args} />;

export const ProfilePagePrimary = Template.bind({});
ProfilePagePrimary.args = {};
ProfilePagePrimary.decorators = [StoreDecorator({})];

export const ProfilePageDark = Template.bind({});
ProfilePageDark.args = {};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
