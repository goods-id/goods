import React, { useState, useCallback, useMemo, ChangeEvent, FC } from 'react'
import { DocsPageProps } from '@storybook/addon-docs/dist/blocks'
import { Div } from '../basics/div'
import { Text } from '../typography'
import { useGoods } from '../goods-context'
import {
  GoodsDocs,
  Section,
  Point,
  Grid,
  Input,
  ImageBox,
} from '../utils/storybook.docs'
import { Icon, IconName } from '.'

const IconDesignImg = require('../../assets/stories/icon-design.png')
const IconSizingImg = require('../../assets/stories/icon-sizing.png')

const iconNames = Object.values(IconName)

const usageRule = [
  {
    label: 'Visual Area',
    values: 'Visualisation for the differences between the types',
  },
  {
    label: 'Type',
    values: 'As a names for the size usage',
  },
  {
    label: 'Pixel Size',
    values: 'Real size of the icon',
  },
  {
    label: 'Scale',
    values: 'Scale usage for the responsiveness',
  },
]

const excludedProps = [
  'onChange',
  'onKeyUp',
  'onKeyDown',
  'onKeyPress',
  'onFocus',
  'onBlur',
]

const IconDocs: FC<DocsPageProps> = props => {
  const { colors, spacing } = useGoods()
  const [searchKey, setSearchKey] = useState('')

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchKey(value)
  }, [])

  const icons = useMemo<IconName[]>(() => {
    if (!searchKey) return iconNames
    const normalizedSearchKey = searchKey.replace(/\s|-|_/g, '')
    const searchRegexp = new RegExp(normalizedSearchKey, 'i')
    return iconNames.filter(name => {
      return searchRegexp.test(name)
    })
  }, [searchKey])

  return (
    <GoodsDocs
      designDesc={`
        Icon will be used as a simple yet iconic visual representation of an action function,
        or a feature.
      `}
      excludedProps={excludedProps}
      {...props}
    >
      <ImageBox
        imageSrc={IconDesignImg}
        alt="Icon Design"
        m={spacing('l', '0', 'xl')}
      />
      <Section title="I. Usage" noChildTab>
        <Div m={spacing('0', '0', 's', '0')}>
          <Text rule="body">Here are some terms to standarized our terms</Text>
        </Div>
        {usageRule.map((item, key) => (
          <Point
            key={key}
            title={item.label}
            description={item.values}
            bullet
          />
        ))}
        <Div
          bg={colors.white30}
          w="100%"
          minH="48px"
          radius="4px"
          fJustify="center"
          p={spacing('xs', 's')}
          b={`1px solid ${colors.black20}`}
          m={spacing('s', '0', 'l')}
        >
          <Text rule="body">
            Icon Format is SVG but until we set React Native SVG settings, it
            needs PNG (1x, 1,5x, 2x, 4x Scale)
          </Text>
        </Div>
        <ImageBox
          imageSrc={IconSizingImg}
          alt="Icon Sizing"
          m={spacing('l', '0')}
        />
      </Section>
      <Section title="II. Icon List" noChildTab>
        <Div w="100%" m={spacing('0', '0', 'l')}>
          <Input
            id="search-icon"
            name="search-icon"
            placeholder="Search Icon"
            autoComplete="off"
            value={searchKey}
            onChange={onSearch}
          />
        </Div>
        <Grid column={{ xs: 2, lg: 4, xl: 6 }}>
          {icons.map(name => (
            <Div
              key={name}
              w="120px"
              h="120px"
              fAlign="center"
              fJustify="center"
            >
              <Icon name={name} m={spacing('0', '0', 'm')} />
              <Text rule="body">{name}</Text>
            </Div>
          ))}
        </Grid>
      </Section>
    </GoodsDocs>
  )
}

export default IconDocs
