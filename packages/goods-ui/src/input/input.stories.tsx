import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, InputProps } from '.'

const storyMetaData: Meta<InputProps> = {
  title: 'Component/Input',
  component: Input,
}

export default storyMetaData

export const InputExample: Story<InputProps> = args => {
  return <Input {...args} />
}

InputExample.args = {
  w: true,
  h: 40,
  containerProps: {
    w: 1 / 2,
    h: 48,
  },
}
