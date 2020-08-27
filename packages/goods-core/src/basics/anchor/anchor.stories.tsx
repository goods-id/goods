import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Anchor, AnchorProps } from '.'
import { useGoods } from '../../goods-context'
import { Div } from '../div'

const storyMetaData: Meta<AnchorProps> = {
  title: 'Basics/Anchor',
  component: Anchor,
}

export default storyMetaData

export const AnchorExample: Story<AnchorProps> = ({ ref: _, ...args }) => {
  const { spacing } = useGoods()
  return (
    <Div m={spacing('l')}>
      <Anchor {...args}>Goods Core - Atoms - Anchor</Anchor>
    </Div>
  )
}

AnchorExample.args = {
  href: 'https://mizone.stage.pomona.id',
  hoverColor: 'red',
  target: '_blank',
}
