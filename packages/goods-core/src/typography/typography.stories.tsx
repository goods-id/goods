import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Text, TextProps } from '.'
import TextDocs from './typography.docs'
import { Log } from '../utils/storybook'
import {
  typographyDesktopRules,
  typographyMobileRules,
  typographyDesktopRuleSettings,
  typographyMobileRuleSettings,
} from '../@goods-system/typography'

const storyMetaData: Meta<TextProps> = {
  title: 'Core/Typography',
  component: Text,
  parameters: { docs: { page: TextDocs } },
}

export default storyMetaData

export const SimpleUsage: Story<TextProps> = args => {
  return <Text {...args}>Quick brown fox jump over the lazy dog</Text>
}
SimpleUsage.args = {
  rule: 'body',
  m: 'm',
  cAlpha: 0.9,
}

export const DesktopRules: Story<TextProps> = () => {
  return (
    <>
      {typographyDesktopRules.map(dRule => (
        <Text as="span" key={dRule} dRule={dRule} mt="s" mx="m" mb="m">
          {`${dRule}:`}
          <Log value={typographyDesktopRuleSettings[dRule]} />
        </Text>
      ))}
    </>
  )
}

export const MobileRules: Story<TextProps> = () => {
  return (
    <>
      {typographyMobileRules.map(rule => (
        <Text as="span" key={rule} rule={rule} mt="0" mx="s" mb="s">
          {`${rule}:`}
          <Log value={typographyMobileRuleSettings[rule]} />
        </Text>
      ))}
    </>
  )
}
MobileRules.parameters = {
  viewport: { defaultViewport: 'iphonex' },
}
