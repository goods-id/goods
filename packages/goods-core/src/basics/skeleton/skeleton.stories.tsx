import React from 'react'
import { Skeleton } from '.'
import { Div } from '../div'

export default {
  title: 'Core/Skeleton',
  component: Skeleton,
}

export const SkeletonExample: React.FC = () => {
  return (
    <Div fDir="row" fAlign="center" m="32px">
      <Skeleton m="0px 16px 0px 0px" h="50px" w="50px" radius="100%" />
      <Skeleton />
    </Div>
  )
}
