import React from 'react'
import { Div } from '.'
import { useGoods } from '../../goods-context'

export default {
  title: 'Core/Div',
  component: Div,
}

export const DivExample: React.FC = () => {
  const { spacing, colors, radius } = useGoods()
  return (
    <Div
      w="300px"
      h="300px"
      bg={colors.green80}
      c={colors.white40}
      m={spacing('l')}
      p={spacing('m')}
      radius={radius('l')}
      hoverBg={colors.green90}
      cursor="pointer"
      overflow="scroll"
    >
      <Div h="700px" w="100%">
        Goods UI - Atoms - Div
      </Div>
    </Div>
  )
}
