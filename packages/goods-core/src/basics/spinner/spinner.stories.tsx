import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Spinner, SpinnerProps } from '.'

const storyMetaData: Meta = {
  title: 'Basics/Spinner',
  component: Spinner,
} as Meta

export default storyMetaData

export const SpinnerExample: Story<SpinnerProps> = () => {
  return <Spinner />
}

export const SpinnerSize: Story<SpinnerProps> = args => {
  return <Spinner {...args} />
}

SpinnerSize.args = {
  s: '48px',
}
