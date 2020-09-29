import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { select, color, text, number } from '@storybook/addon-knobs'
import { Icon, IconName, IconSize, IconRotate } from '.'
import { useGoods } from '../goods-context'
import { Div } from '../basics/div'
import IconDocs from './icon.docs'

const iconNames = Object.values(IconName)

const iconSizes: (keyof typeof IconSize | '')[] = [
  'small',
  'normal',
  'large',
  '',
]

const iconRotates: (keyof typeof IconRotate | '')[] = [
  'up',
  'right',
  'down',
  'left',
  '',
]

export default {
  title: 'Core/Icon',
  component: Icon,
  parameters: { docs: { page: IconDocs } },
} as Meta

export const All: Story = () => {
  const { spacing } = useGoods()
  return (
    <Div fDir='row' fWrap='wrap' fJustify='flex-start'>
      {iconNames.map(name => (
        <Icon key={name} name={name} m={spacing('s')} />
      ))}
    </Div>
  )
}

export const WithKnobs: Story = () => {
  const { colors, spacing } = useGoods() || {}
  const namedSize = select('named', iconSizes, 'normal', 'size')
  const numberedSize = number('numbered', 24, { min: 0, step: 1 }, 'size')
  const namedRotate = select('named', iconRotates, 'up', 'rotate')
  const numberedRotate = number(
    'numbered',
    0,
    { min: 0, max: 359, step: 1 },
    'rotate'
  )
  return (
    <Icon
      name={select('name', iconNames, IconName.home)}
      c={color('c', colors?.blue50 || '')}
      c1={color('c1', colors?.red60 || '')}
      m={text('m', spacing('s'))}
      p={text('p', spacing('0'))}
      size={namedSize || numberedSize}
      rotate={namedRotate || numberedRotate}
    />
  )
}

WithKnobs.parameters = {
  docs: { disable: true },
}
