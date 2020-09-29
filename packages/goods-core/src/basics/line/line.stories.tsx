import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Line, LineProps } from '.'

const storyMetaData: Meta<LineProps> = {
  title: 'Basics/Line',
  component: Line,
}

export default storyMetaData

export const LineExample: Story<LineProps> = args => {
  return <Line {...args} />
}

LineExample.args = {
  w: '264px',
  h: '1px',
  m: 'l',
  bg: 'red60',
  radius: 'l',
}
