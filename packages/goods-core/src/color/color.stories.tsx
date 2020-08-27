import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Div } from '../basics/div'
import { Text } from '../typography'
import colors, { blue, orange, black, green, red, white, getInverseBw } from '.'
import ColorDocs from './color.docs'
import { utilsStoryParameters } from '../utils/storybook'

export default {
  title: 'Core/Colour',
  parameters: { docs: { page: ColorDocs }, ...utilsStoryParameters },
} as Meta

interface ShowColorProps {
  displayColor: string
  colorName: string
}

interface ShowColorListProps {
  colorList: Partial<typeof colors>
}

const ShowColor: React.FC<ShowColorProps> = ({ displayColor, colorName }) => {
  const c = getInverseBw(displayColor)
  return (
    <Div
      w="80%"
      fDir="row"
      fJustify="space-between"
      bg={displayColor}
      radius="8px"
      m="16px 0px 0px"
      p="12px"
      b={`1px solid black`}
    >
      <Text rule="body" c={c}>
        {colorName}
      </Text>
      <Text rule="body" c={c}>
        {displayColor}
      </Text>
    </Div>
  )
}

const ShowColorList: React.FC<ShowColorListProps> = ({ colorList }) => {
  const colorNames = Object.keys(colorList)
  return (
    <Div w="100%" fAlign="center">
      {colorNames.map(name => (
        <ShowColor key={name} displayColor={colorList[name]} colorName={name} />
      ))}
    </Div>
  )
}

const primary = {
  blue50: colors.blue50,
  orange90: colors.orange90,
  black30: colors.black30,
  green50: colors.green50,
  red60: colors.red60,
  white10: colors.white10,
}

export const Primary: Story = () => <ShowColorList colorList={primary} />
export const Blue: Story = () => <ShowColorList colorList={blue} />
export const Orange: Story = () => <ShowColorList colorList={orange} />
export const Black: Story = () => <ShowColorList colorList={black} />
export const Green: Story = () => <ShowColorList colorList={green} />
export const Red: Story = () => <ShowColorList colorList={red} />
export const White: Story = () => <ShowColorList colorList={white} />
