import React from 'react'
import { Story } from '../utils/storybook'
import Div from '../basics/div'
import shadows from './index'
import spacing from '../spacing'
import colors from '../color'
import Text from '../typography'

export default {
  title: 'Core/Shadow',
}

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

export const shadow: Story = () => (
  <Div p={spacing('s')} fJustify="space-between" bg={colors.white30}>
    <ShadowDisplay shadowStr={shadows.flat} title="Flat" />
    <ShadowDisplay shadowStr={shadows.low} title="Low" />
    <ShadowDisplay shadowStr={shadows.high} title="High" />
  </Div>
)
shadow.story = { name: 'Shadow Example' }
