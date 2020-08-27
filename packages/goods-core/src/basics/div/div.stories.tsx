import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Div, DivProps } from '.'
import { useGoods } from '../../goods-context'

const storyMetaData: Meta<DivProps> = {
  title: 'Basics/Div',
  component: Div,
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
