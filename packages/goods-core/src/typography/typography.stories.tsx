import React from 'react'
import { color, select, text, number } from '@storybook/addon-knobs'
import {
  Text,
  desktopRules,
  mobileRules,
  desktopBasicSettings,
  mobileBasicSettings,
} from '.'
import TextDocs from './typography.docs'
import { useGoods } from '../goods-context'
import { Log, Story } from '../utils/storybook'

export default {
  title: 'Core/Typography',
  component: Text,
  parameters: { docs: { page: TextDocs } },
}

export const SimpleUsage: Story = () => {
  const theme = useGoods()
  return (
    <Text rule="body" m={theme.spacing('m')}>
      Quick brown fox jump over the lazy dog
    </Text>
  )
}

export const DesktopRules: Story = () => {
  const theme = useGoods()
  const margin = theme.spacing('s', 'm', 'm')
  return (
    <>
      {desktopRules.map(dRule => (
        <Text key={dRule} dRule={dRule} m={margin}>
          {`${dRule}:`}
          <Log value={desktopBasicSettings[dRule]} />
        </Text>
      ))}
    </>
  )
}

export const MobileRules: Story = () => {
  const theme = useGoods()
  const margin = theme.spacing('0', 's', 's')
  return (
    <>
      {mobileRules.map(rule => (
        <Text key={rule} rule={rule} m={margin}>
          {`${rule}:`}
          <Log value={mobileBasicSettings[rule]} />
        </Text>
      ))}
    </>
  )
}
MobileRules.story = {
  parameters: {
    viewport: { defaultViewport: 'iphonex' },
  },
}

export const WithKnobs: Story = () => {
  const theme = useGoods()
  return (
    <Text
      rule={select('rule', mobileRules, 'body')}
      dRule={select('dRule', desktopRules, 'body')}
      size={text('size', '')}
      weight={number('weight', undefined, { min: 300, max: 500, step: 100 })}
      lineHeight={text('lineHeight', '')}
      letterSpace={text('letterSpace', '')}
      c={color('c', theme.colors.black30)}
      m={text('m', theme.spacing('m'))}
    >
      {text('content', 'Quick brown fox jump over the lazy dog')}
    </Text>
  )
}

WithKnobs.story = {
  parameters: {
    docs: { disable: true },
  },
}
