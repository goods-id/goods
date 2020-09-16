import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Icon, useGoods } from '../../../goods-core/src'
import { Button, ButtonProps } from './button'

const storyMetaData: Meta<ButtonProps> = {
  title: 'Component/Button',
  component: Button,
}

export default storyMetaData

export const ButtonExample: Story<ButtonProps> = ({ ...args }) => {
  const { spacing, colors } = useGoods()
  return (
    <Button
      w
      h
      m="xxxl"
      py="xs"
      px="m"
      c="black40"
      bg="orange70"
      prefix={<Icon name="search" c={colors.black40} />}
      {...args}
    >
      This New Button
    </Button>
  )
}
