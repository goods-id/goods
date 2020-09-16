import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import radius, { Radius } from '.'
import RadiusDocs from './radius.docs'
import { utilsStoryParameters } from '../utils/storybook'
import { Div } from '../basics/div'
import { Text } from '../typography'

export default {
  title: 'Core/Corner Radius',
  parameters: { docs: { page: RadiusDocs }, ...utilsStoryParameters },
} as Meta

const radiusNames: Radius[] = ['m', 'l', 'full']
const radiusNameAliases = ['fixed-medium', 'fixed-large', 'auto-full']

export const RadiusExample: Story = () => {
  return (
    <Div fDir='row' p='16px' fJustify='space-between' w='100%'>
      {radiusNames.map((name, i) => (
        <Div
          key={name}
          w='150px'
          h='100px'
          fAlign='center'
          fJustify='center'
          b='1px solid black'
          radius={radius(name)}
        >
          <Text rule='body' textAlign='center'>
            {name}
          </Text>
          <Text rule='body' weight='bold' textAlign='center'>
            {`(${radiusNameAliases[i]})`}
          </Text>
        </Div>
      ))}
    </Div>
  )
}
