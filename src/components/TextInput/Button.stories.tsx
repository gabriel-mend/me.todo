import { Meta, StoryObj } from '@storybook/react'

import { ButtonProps, Button } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
}

export const Large: StoryObj<ButtonProps> = {
}

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
