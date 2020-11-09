import React, { useCallback, useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, BoxProps, Image, Line, Text } from '@pomona/goods-core'
import { Dropdown } from './dropdown'
import { DropdownProps, OptionItem } from './_types'
import { Input } from '../input'
import { ChangeEventInput } from '../@types/global'

const storyMetaData: Meta<DropdownProps> = {
  title: 'Component/Dropdown',
  component: Dropdown,
}

export default storyMetaData

const options: OptionItem[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'avocado', label: 'Avocado' },
  { value: 'banana', label: 'Banana' },
  { value: 'blackcurrent', label: 'Blackcurrent' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian' },
  {
    value: 'long-fruit',
    label:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident consequuntur iste deleniti accusantium atque nesciunt modi, quo mollitia, deserunt veniam possimus nisi commodi sed. Quasi officiis impedit dignissimos eveniet omnis.',
  },
  { value: 'orange', label: 'Orange' },
]

export const DropdownExample: Story<DropdownProps> = args => {
  return (
    <Dropdown
      {...args}
      key='dropdown-example'
      id='fruits'
      name='fruit'
      options={options}
    />
  )
}

DropdownExample.args = {
  label: 'Fruit',
  placeholder: 'Choose a fruit',
  supText: 'Choose a fruit you want',
  noOptionsMessage: 'Hasil tidak ditemukan',
  w: '400px',
  maxW: 'calc(100vw - 32px)',
}

const commonConditions = [
  'Normal',
  'Filled',
  'Disabled',
  'Read only',
  'Error',
  'No label',
  'No support text',
  'No label and support text',
] as const

function isWithValue(condition: string): boolean {
  return ['Filled', 'Disabled', 'Read only', 'Error'].includes(condition)
}

interface TemplateProps extends BoxProps {
  title: string
}

const Template: React.FC<TemplateProps> = ({ title, children, ...rest }) => {
  return (
    <Box w p='s' fAlign='center' overflowX='hidden'>
      <Text rule='title' weight='bold' textAlign='center' c='black40'>
        {title}
      </Text>
      <Box
        w
        d='grid'
        gAutoFlow='row'
        gTempCol='repeat(auto-fit, 400px)'
        gap='16px'
        mt='l'
        fJustify={{ xs: 'flex-start', md: 'center' }}
        {...rest}
      >
        {children}
      </Box>
    </Box>
  )
}

interface ConditionBoxProps {
  title: string
  c?: BoxProps['c']
  bg?: BoxProps['bg']
}

const ConditionBox: React.FC<ConditionBoxProps> = ({
  c,
  bg,
  title,
  children,
}) => {
  return (
    <Box
      w
      maxW='calc(100vw - 72px)'
      h='250px'
      b='1px solid'
      bC='black40'
      radius='m'
      p='xs'
    >
      <Text rule='subtitle' c={c} bg={bg}>
        {title}
      </Text>
      <Line my='xs' />
      {children}
    </Box>
  )
}

export const Basic: Story = () => {
  return (
    <Template key='basic' title='Basic'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <Dropdown
              key={`fruits-basic-${dashed}`}
              id={`fruits-basic-${dashed}`}
              name={`fruit-basic-${dashed}`}
              options={options}
              placeholder='Choose a fruit'
              noOptionsMessage='Fruit not found'
              w
              value={isWithValue(cond) ? 'banana' : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : 'Fruits'
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : 'Choose a fruit you want'
              }
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

export const Prefixed: Story = () => {
  return (
    <Template key='prefixed' title='Prefixed'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <Dropdown
              key={`fruits-prefixed-${dashed}`}
              id={`fruits-prefixed-${dashed}`}
              name={`fruit-prefixed-${dashed}`}
              options={options}
              placeholder='Choose a fruit'
              noOptionsMessage='Fruit not found'
              w
              value={isWithValue(cond) ? 'banana' : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : 'Fruits'
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : 'Choose a fruit you want'
              }
              prefix={
                <Image
                  src='https://img.icons8.com/color/48/000000/fruit-bag.png'
                  alt='fruit-bag-icon'
                  s='24px'
                />
              }
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}

export const WithClearIcon: Story = () => {
  return (
    <Template title='With Clear Icon'>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <Dropdown
              w
              clearIcon
              key={`fruits-clear-icon-${dashed}`}
              id={`fruits-clear-icon-${dashed}`}
              name={`fruit-clear-icon-${dashed}`}
              options={options}
              placeholder='Choose a fruit'
              noOptionsMessage='Fruit not found'
              value={isWithValue(cond) ? 'banana' : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : 'Fruits'
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : 'Choose a fruit you want'
              }
            />
          </ConditionBox>
        )
      })}
      <ConditionBox title='Custom clear icon'>
        <Dropdown
          w
          key='fruits-clear-icon-custom'
          id='fruits-clear-icon-custom'
          name='fruit-clear-icon-custom'
          options={options}
          placeholder='Choose a fruit'
          noOptionsMessage='Fruit not found'
          label='Fruits'
          supText='Choose a fruit you want'
          clearIcon={{ icName: 'rejected', icColor: 'black30' }}
        />
      </ConditionBox>
    </Template>
  )
}

export const CustomMenuPlacementAndWidth: Story = () => {
  const [containerWidth, setContainerWidth] = useState('50%')
  const [menuWidth, setMenuWidth] = useState('150%')
  const [menuOffsetTop, setMenuOffsetTop] = useState('20px')
  const [menuOffsetLeft, setMenuOffsetLeft] = useState('')

  const onChange = useCallback((e: ChangeEventInput) => {
    const { name, value } = e.target
    switch (name) {
      case 'containerWidth':
        return setContainerWidth(value)
      case 'menuWidth':
        return setMenuWidth(value)
      case 'menuOffsetTop':
        return setMenuOffsetTop(value)
      case 'menuOffsetLeft':
        return setMenuOffsetLeft(value)
      default:
        return undefined
    }
  }, [])

  return (
    <Template title='Custom Width and Menu Placement'>
      <Box
        d='grid'
        gAutoFlow='row'
        gTempCol='repeat(auto-fit, 150px)'
        gCol={{ xs: '1', lg: '1 / span 2', xl: '1 / span 3' }}
        gap='16px'
        fJustify='center'
      >
        <Input
          type='text'
          name='containerWidth'
          value={containerWidth}
          label='Container width'
          onChange={onChange}
        />
        <Input
          type='text'
          name='menuWidth'
          value={menuWidth}
          label='Menu width'
          onChange={onChange}
        />
        <Input
          type='text'
          name='menuOffsetTop'
          value={menuOffsetTop}
          label='Menu offset top'
          onChange={onChange}
        />
        <Input
          type='text'
          name='menuOffsetLeft'
          value={menuOffsetLeft}
          label='Menu offset left'
          onChange={onChange}
        />
      </Box>
      {commonConditions.map(cond => {
        const dashed = cond.replace(/\s/g, '-').toLowerCase()
        return (
          <ConditionBox key={dashed} title={cond}>
            <Dropdown
              key={`fruits-prefixed-${dashed}`}
              id={`fruits-prefixed-${dashed}`}
              name={`fruit-prefixed-${dashed}`}
              options={options}
              placeholder='Choose a fruit'
              noOptionsMessage='Fruit not found'
              value={isWithValue(cond) ? 'banana' : undefined}
              readOnly={cond === 'Read only'}
              disabled={cond === 'Disabled'}
              isError={cond === 'Error'}
              label={
                cond === 'No label' || cond === 'No label and support text'
                  ? undefined
                  : 'Fruits'
              }
              supText={
                cond === 'No support text' ||
                cond === 'No label and support text'
                  ? undefined
                  : 'Choose a fruit you want'
              }
              w={containerWidth}
              menuWidth={menuWidth}
              menuOffsetTop={menuOffsetTop}
              menuOffsetLeft={menuOffsetLeft}
            />
          </ConditionBox>
        )
      })}
    </Template>
  )
}
