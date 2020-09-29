import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Anchor, AnchorProps } from '.'
import { Div } from '../div'

const storyMetaData: Meta<AnchorProps> = {
  title: 'Basics/Anchor',
  component: Anchor,
}

export default storyMetaData

export const AnchorExample: Story<AnchorProps> = args => {
  return (
    <Div m='l'>
      <Anchor {...args}>Goods Core - Atoms - Anchor</Anchor>
    </Div>
  )
}

AnchorExample.args = {
  href: 'https://mizone.stage.pomona.id',
  hoverProps: { c: 'red60' },
  target: '_blank',
}
