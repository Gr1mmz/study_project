import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryModal = Template.bind({});
PrimaryModal.args = {
  isOpen: true,
  children: 'Modal content',
};

export const DarkModal = Template.bind({});
DarkModal.args = {
  isOpen: true,
  children: 'Modal content',
};
DarkModal.decorators = [ThemeDecorator(Theme.DARK)];