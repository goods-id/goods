import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Text, TextProps } from '.'
import TextDocs from './typography.docs'
import { Log } from '../utils/storybook'
import {
  typographyDesktopRules,
  typographyMobileRules,
  typographyDesktopRuleSettings,
  typographyMobileRuleSettings,
} from '../@goods-system/typography'
import { Line } from '../basics'

export default {
  title: 'Core/Typography',
  component: Text,
  parameters: { docs: { page: TextDocs } },
}

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
        <Text as='span' key={dRule} dRule={dRule} mt='s' mx='m' mb='m'>
          {`${dRule}:`}
          <Log value={typographyDesktopRuleSettings[dRule] || {}} />
        </Text>
      ))}
    </>
  )
}

export const MobileRules: Story<TextProps> = () => {
  return (
    <>
      {typographyMobileRules.map(rule => (
        <Text as='span' key={rule} rule={rule} mt='0' mx='s' mb='s'>
          {`${rule}:`}
          <Log value={typographyMobileRuleSettings[rule] || {}} />
        </Text>
      ))}
    </>
  )
}
MobileRules.parameters = {
  viewport: { defaultViewport: 'iphonex' },
}

export const Responsive: Story = () => {
  return (
    <>
      <Text rule='body' weight='bold'>
        Breakpoint definition in this example:
        <br />
        - xs = min-width 0px (mobile)
        <br />- lg = min-width 768px (desktop)
      </Text>
      <Text rule='caption' mb='xl'>
        Note: change the storybook viewport to see responsiveness
      </Text>
      <Line />
      <Text rule={{ xs: 'subtitle', lg: 'title' }} mb={{ xs: 's', lg: 'l' }}>
        Typography rule =&gt; xs: subtitle, lg: title.
        <br />
        Margin bottom =&gt; xs: s (16px), lg: l (32px)
      </Text>
      <Line />
      <Text
        rule='body'
        fSize={{ xs: '14px', lg: '16px' }}
        mt={{ xs: 'm', lg: 'xl' }}
        textAlign={{ xs: 'center', lg: 'left' }}
      >
        font size =&gt; xs: 14px, lg: 16px
        <br />
        Marigin top =&gt; xs: m (24px), lg: xl (40px).
        <br />
        Text align =&gt; xs: center, lg: left.
      </Text>
      <Line />
      <Text
        rule='body'
        c={{ xs: 'black20', lg: 'black30' }}
        mr={{ xs: 'xs', lg: 'm' }}
      >
        Color =&gt; xs: black20, lg: black30
        <br />
        Marigin right =&gt; xs: xs (12px), lg: m (24px).
      </Text>
      <Line />
    </>
  )
}

Responsive.parameters = { docs: { disable: true } }
