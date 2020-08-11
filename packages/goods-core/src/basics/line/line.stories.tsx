import React from 'react'
import { color, select, text } from '@storybook/addon-knobs'
import { Line } from '.'
import { useGoods } from '../../goods-context'
import { spacingConstants } from '../../spacing'
import { radiusConstants } from '../../radius'
import { Story } from '../../utils/storybook'

export default {
  title: 'Basics/Line',
  component: Line,
}

export const LineExample: Story = () => {
  const theme = useGoods()

  return (
    <Line w="264px" h="1px" m="32px" bg={theme.colors.red60} radius="8px" />
  )
}

export const WithKnobs: Story = () => {
  const theme = useGoods()

  return (
    <Line
      w={text('w', '300px')}
      h={text('h', '1px')}
      m={select('m', spacingConstants, '32px')}
      bg={color('bg', theme.colors.red90)}
      radius={select('radius', radiusConstants, '8px')}
    />
  )
}

WithKnobs.story = {
  parameters: {
    docs: { disable: true },
  },
}
