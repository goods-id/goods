import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, Icon, useGoods } from '../../../goods-core/src'
import { Button, ButtonProps } from './button'

const storyMetaData: Meta<ButtonProps> = {
  title: 'Component/Button',
  component: Button,
}

export default storyMetaData

export const ButtonExample: Story<ButtonProps> = ({ ...args }) => {
  const { colors } = useGoods()
  return (
    <Box>
      <Button
        bg='black40'
        prefix={{
          icName: 'search',
          icRotate: 'right',
          icSize: 'normal',
          icColor: colors.white10,
        }}
        suffix={<Icon name='notification' c={colors.green80} />}
        {...args}
      >
        Pencet aku 1
      </Button>
    </Box>
  )
}
