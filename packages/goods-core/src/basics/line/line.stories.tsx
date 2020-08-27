import React from 'react'
import { color, select, text } from '@storybook/addon-knobs'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Line, LineProps } from '.'
import { useGoods } from '../../goods-context'
import { spacingConstants } from '../../spacing'
import { radiusConstants } from '../../radius'

export default {
  title: 'Basics/Line',
  component: Line,
} as Meta<LineProps>

export const LineExample: Story<LineProps> = () => {
  const theme = useGoods()

  return (
    <Line w="264px" h="1px" m="32px" bg={theme.colors.red60} radius="8px" />
  )
}

export const WithKnobs: Story<LineProps> = () => {
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

WithKnobs.parameters = {
  docs: { disable: true },
}
