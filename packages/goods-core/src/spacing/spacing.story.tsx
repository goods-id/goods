import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import spacing, { spacingConstants, Spacing } from '.'
import { Div } from '../basics/div'
import { Line } from '../basics/line'
import { Text } from '../typography'
import { utilsStoryParameters } from '../utils/storybook'
import SpacingDocs from './spacing.docs'

const spacingNames = Object.keys(spacingConstants) as Spacing[]

export default {
  title: 'Core/Spacing',
  parameters: { docs: { page: SpacingDocs }, ...utilsStoryParameters },
} as Meta

export const SpacingExample: Story = () => {
  return (
    <Div w='100%' fAlign='center' fDir='row' fJustify='center' fWrap='wrap'>
      {spacingNames.map(name => (
        <Div key={name} m='8px 4px' p='8px' w='30%' bg='aliceblue'>
          <Text rule='body'>{`${name}: ${spacing(name)}`}</Text>
          <Line />
          <Line m={spacing(name, '0', '0')} />
        </Div>
      ))}
    </Div>
  )
}

export const MultiSpacing: Story = () => {
  return (
    <Div w='500px' h='500px' bg='#d1d1d1' fJustify='space-between' m='auto'>
      <Div
        w='max-content'
        h='max-content'
        bg='lightgreen'
        p={spacing('xxs', '0', '0', 'xxxl')}
      >
        <Text rule='body'>Paddding xxs, 0, 0, xxxl</Text>
      </Div>
      <Div w='100%' fJustify='space-between' fDir='row'>
        <Div
          w='max-content'
          h='max-content'
          bg='yellow'
          p={spacing('xxl', '0', 'l', 'xxxl')}
        >
          <Text rule='body'>Padding xxl, 0, l, xxxl</Text>
        </Div>
        <Div
          w='max-content'
          h='max-content'
          bg='lightblue'
          p={spacing('s', 'm', '0', 'l')}
        >
          <Text rule='body'>Padding s, m, 0, l</Text>
        </Div>
      </Div>
    </Div>
  )
}
