import React from 'react'
import { DocsPageProps } from '@storybook/addon-docs/dist/blocks'
import { Text } from '../typography'
import { GoodsDocs } from '../utils/storybook.docs'

const RadiusDocs: React.FC<DocsPageProps> = props => {
  return (
    <GoodsDocs
      withoutPropsTable
      withoutStories
      designDesc={`
        Corner Radius is used to differentiate between a group of components to the other.
        It also helps to build memorability of shape, whether it is accessible or not.
      `}
      {...props}
    >
      <Text rule="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem sunt sequi quia, veniam atque aspernatur fugit? Nobis, ab
        aperiam eum, sit rerum inventore quae commodi facere soluta modi
        corrupti.
      </Text>
      <Text rule="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem sunt sequi quia, veniam atque aspernatur fugit? Nobis, ab
        aperiam eum, sit rerum inventore quae commodi facere soluta modi
        corrupti.
      </Text>
      <Text rule="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem sunt sequi quia, veniam atque aspernatur fugit? Nobis, ab
        aperiam eum, sit rerum inventore quae commodi facere soluta modi
        corrupti.
      </Text>
    </GoodsDocs>
  )
}

export default RadiusDocs
