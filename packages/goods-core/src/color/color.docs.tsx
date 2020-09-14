import React from 'react'
import { Div } from '../basics/div'
import { useGoods } from '../goods-context'
import { GoodsDocs, Section } from '../utils/storybook.docs'
import { Text } from '../typography'
import colors, { blue, orange, black, green, red, white, getInverseBw } from '.'
import { ColorProps } from '../@goods-system/color'

type Color = typeof colors
type ColorName = keyof Color
type Colors = { key: ColorName; value: string }[]

interface ColorPaletteProps {
  name: 'Blue' | 'Orange' | 'Black' | 'Green' | 'Red' | 'White'
  colors: Colors
  primary: ColorName
}

interface ShowColorProps {
  h: string
  colorName: ColorName
  colorValue: string
  isPrimary?: boolean
}

const principles: { title: string; description: string }[] = [
  {
    title: 'Communication',
    description: `
      Pomona value aesthetically pleasing use of colours.
      However, our use of colour should emphasise more on clear communication.
      We use colour purposefully, rationally, and we use it to support
      the purpose of the content.
    `,
  },
  {
    title: 'Accessible',
    description: `
      When choosing colours, we consider our users who are colour blind and or have low vision.
      We must never use colour alone to convey information.
    `,
  },
  {
    title: 'Attention',
    description: `
      Our colours should help bring attention to what matters most.
      Colours should support the hierarchy of the page.
    `,
  },
]

function createColorArray(color: Partial<Color>): Colors {
  const colorNames = Object.keys(color) as ColorName[]
  return colorNames.map<Colors[number]>(name => ({
    key: name,
    value: color[name],
  }))
}

const colorPalettes: ColorPaletteProps[] = [
  { name: 'Blue', colors: createColorArray(blue), primary: 'blue50' },
  { name: 'Orange', colors: createColorArray(orange), primary: 'orange90' },
  { name: 'Black', colors: createColorArray(black), primary: 'black30' },
  { name: 'Green', colors: createColorArray(green), primary: 'green50' },
  { name: 'Red', colors: createColorArray(red), primary: 'red60' },
  { name: 'White', colors: createColorArray(white), primary: 'white10' },
]

const ShowColor: React.FC<ShowColorProps> = props => {
  const { h, colorName, colorValue, isPrimary } = props
  const { spacing } = useGoods()
  const c = getInverseBw(colorValue) as ColorProps['c']
  return (
    <Div
      w="100%"
      fDir="row"
      fJustify="space-between"
      fAlign="center"
      p={spacing('s')}
      bg={colorValue}
      h={h}
    >
      <Text rule="caption" c={c}>
        {`${colorName}${isPrimary ? '*' : ''}`}
      </Text>
      <Text rule="caption" c={c}>
        {colorValue}
      </Text>
    </Div>
  )
}

const ColorPalette: React.FC<ColorPaletteProps> = props => {
  const { colors: colorArray, primary, name } = props
  const { spacing } = useGoods()
  const numOfColors = colorArray.length
  const primaryHeight = `${256 - (numOfColors - 1) * 48}px`
  return (
    <Div w="calc(100%/3 - 48px)" minW="192px" p={spacing('l', 's', '0')}>
      <Div w="100%" p={spacing('0', '0', 's')}>
        <Text rule="body">{name}</Text>
      </Div>
      {colorArray.map(({ key, value }) => (
        <ShowColor
          key={key}
          colorName={key}
          colorValue={value}
          h={key === primary ? primaryHeight : '48px'}
          isPrimary={key === primary}
        />
      ))}
    </Div>
  )
}

const ColorDocs: React.FC = () => {
  const { spacing } = useGoods()
  return (
    <GoodsDocs
      designDesc={`
        Pomona uses colours purposefully to communicate how things function in the interface,
        and to help our users understand our messages. The right combination of colours
        can help our users interact with our product easier, and influence how they feel,
        think, and behave.
      `}
      withoutPropsTable
      withoutStories
      withoutDocsTitle
    >
      <Section title="I. Principles" m={spacing('xl', '0', 'm')} noChildTab>
        <Text rule="body" my="xxs">
          These guidelines are our framework upon how we use colour both inside
          and outside of our system in Pomona.
        </Text>
        {principles.map(item => (
          <Div key={item.title} w="100%" m={spacing('s', '0', '0')}>
            <Text rule="body" weight="bold">
              {item.title}
            </Text>
            <Text rule="body">{item.description}</Text>
          </Div>
        ))}
      </Section>
      <Section title="II. Colour Palette" noChildTab>
        <Text rule="body" my="xxs">
          Our colour palette is built with our values and our guidelines as its
          foundation.
        </Text>
        <Div w="100%" m={spacing('s', '0', '0')}>
          <Text rule="body" weight="bold">
            Note
          </Text>
          <Text rule="body">Colour with (*) symbol is a primary colour</Text>
        </Div>
        <Div w="100%" fDir="row" fJustify="space-between" fWrap="wrap">
          {colorPalettes.map(item => (
            <ColorPalette key={item.name} {...item} />
          ))}
        </Div>
      </Section>
    </GoodsDocs>
  )
}

export default ColorDocs
