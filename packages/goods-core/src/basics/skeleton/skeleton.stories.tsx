import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Skeleton } from '.'
import { Div } from '../div'

export default {
  title: 'Basics/Skeleton',
  component: Skeleton,
} as Meta

export const SkeletonExample: Story = () => {
  return (
    <Div fDir="row" fAlign="center" m="32px">
      <Skeleton m="0px 16px 0px 0px" h="50px" w="50px" radius="100%" />
      <Skeleton />
    </Div>
  )
}
