import React from 'react'
import { DocsPageProps } from '@storybook/addon-docs/dist/blocks'
import { Text } from '.'
import { GoodsDocs } from '../utils/storybook.docs'

const excludedProps = [
  'onClick',
  'onChange',
  'onKeyUp',
  'onKeyDown',
  'onKeyPress',
  'onFocus',
  'onBlur',
  'onMouseOver',
  'onMouseLeave',
  'onMouseEnter',
  'onMouseOut',
]

const TextDocs: React.FC<DocsPageProps> = props => {
  return (
    <GoodsDocs
      designDesc={`
        Typography plays a great role in making a product’s UI,
        especially content look legible and have a good readability.
        Hence, understanding some basic principles of typography,
        along with knowing what to do with each principles will boost the design and
        user experience of the product.
      `}
      excludedProps={excludedProps}
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

export default TextDocs
