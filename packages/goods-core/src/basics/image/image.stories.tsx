import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Image, ImageProps } from '.'

const storyMetaData: Meta<ImageProps> = {
  title: 'Basics/Image',
  component: Image,
  argTypes: {
    bg: { control: 'color' },
  },
}

export default storyMetaData

export const ImageExample: Story<ImageProps> = args => {
  return <Image {...args} />
}

ImageExample.args = {
  alt: 'gege-elisa',
  src:
    'https://i.pinimg.com/originals/37/5c/49/375c49ca374a122c638f84d3adb8adcd.jpg',
  w: '300px',
  p: 'm',
  radius: 'full',
}
