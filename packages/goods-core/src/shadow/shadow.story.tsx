import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { utilsStoryParameters } from '../utils/storybook'
import { Div } from '../basics/div'
import shadows from './index'
import spacing from '../spacing'
import colors from '../color'
import { Text } from '../typography'
import ShadowDocs from './shadow.docs'

export default {
  title: 'Core/Shadow',
  parameters: { docs: { page: ShadowDocs }, ...utilsStoryParameters },
} as Meta

const ShadowDisplay = ({ shadowStr, title }) => (
  <Div
    w="100px"
    h="100px"
    shadow={shadowStr}
    bg={colors.white10}
    fAlign="center"
    fJustify="center"
  >
    <Text>{title}</Text>
  </Div>
)

export const ShadowExample: Story = () => (
  <Div fDir="row" p={spacing('s')} fJustify="space-between" bg={colors.white30}>
    <ShadowDisplay shadowStr={shadows.flat} title="Flat" />
    <ShadowDisplay shadowStr={shadows.low} title="Low" />
    <ShadowDisplay shadowStr={shadows.high} title="High" />
  </Div>
)
