import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Div, DivProps, Box, BoxProps } from '.'
import { useGoods } from '../../goods-context'

const storyMetaData: Meta<BoxProps> = {
  title: 'Basics/Div',
  component: Box,
  argTypes: {
    bg: { control: 'color' },
    c: { control: 'color' },
  },
}

export default storyMetaData

export const DivExample: Story<DivProps> = ({ ref: _, ...args }) => {
  const { spacing, colors, radius } = useGoods()
  return (
    <Div
      bg={colors.green80}
      c={colors.white40}
      m={spacing('l')}
      p={spacing('m')}
      radius={radius('l')}
      hoverBg={colors.green90}
      {...args}
    >
      <Div h="700px" w="100%">
        Goods Core - Atoms - Div
      </Div>
    </Div>
  )
}

DivExample.args = {
  fDir: 'row',
  cursor: 'pointer',
  overflow: 'scroll',
  w: '300px',
  h: '300px',
}

export const BoxExample: Story<BoxProps> = args => {
  return (
    <Box
      bg="blue50"
      c="white20"
      w={{ xs: 1, sm: 1 / 2, lg: 700, md: '5em' }}
      h="300px"
      d="flex"
      {...args}
    >
      Goods Core - Basics - Box
    </Box>
  )
}
