import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Icon, IconProps } from '.'
import { iconName, IconName } from './_types'
import { Box } from '../basics/div'
import colors from '../color'
import IconDocs from './icon.docs'

const iconNames = Object.keys(iconName) as IconName[]
const colorNames = Object.keys(colors)

const storyMetaData: Meta<IconProps> = {
  title: 'Core/Icon',
  component: Icon,
  parameters: { docs: { page: IconDocs } },
}

export default storyMetaData

export const All: Story = () => {
  return (
    <Box fDir='row' fWrap='wrap' fJustify='flex-start'>
      {iconNames.map(name => (
        <Icon key={name} name={name} m='s' />
      ))}
    </Box>
  )
}

export const IconExample: Story<IconProps> = args => {
  return <Icon {...args} />
}

IconExample.args = {
  name: 'pomona',
  c: 'blue50',
  size: 'normal',
}

IconExample.argTypes = {
  name: { name: 'name', control: { type: 'select', options: iconNames } },
  c: { name: 'c', control: { type: 'select', options: colorNames } },
  c1: { name: 'c1', control: { type: 'select', options: colorNames } },
}

IconExample.parameters = {
  docs: { disable: true },
}
