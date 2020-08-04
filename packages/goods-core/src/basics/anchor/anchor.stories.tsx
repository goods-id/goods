import React from 'react'
import { Anchor } from '.'
import { useGoods } from '../../goods-context'
import { Div } from '../div'

export default {
  title: 'Core/Anchor',
  component: Anchor,
}

export const AnchorExample: React.FC = () => {
  const { spacing } = useGoods()
  return (
    <Div m={spacing('l')}>
      <Anchor
        href="https://mizone.stage.pomona.id"
        target="_blank"
        hoverColor="red"
      >
        Goods UI - Atoms - Div
      </Anchor>
    </Div>
  )
}
