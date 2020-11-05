import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box } from '@pomona/goods-core'
import { Switch, SwitchProps } from './switch'

const storyMetaData: Meta = {
  title: 'Component/Switch',
  component: Switch,
}

export default storyMetaData

export const SwitchExample: Story<SwitchProps> = args => {
  const [value, setValue] = useState(false)
  return (
    <Switch
      {...args}
      checked={value}
      onChange={e => setValue(e.target.checked)}
    />
  )
}

export const Basic: Story<SwitchProps> = args => {
  const [value, setValue] = useState(false)
  const [disabled, setDisabled] = useState(false)
  return (
    <Box w='70%' fDir='row' fWrap='wrap'>
      <Box minW='50%'>
        <Switch
          {...args}
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          disabled
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          label='Goods Design System'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          disabled
          label='Goods Design System'
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          label='Goods Design System'
          supText='Pomona Support'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          label='Goods Design System'
          supText='Pomona Support'
          disabled
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
      <Box minW='48%' bC='black20' b='1px solid' p='xxs' m='2px'>
        <Switch
          {...args}
          label='Goods Design System'
          supText='Pomona Support'
          isFit
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='48%' bC='black20' b='1px solid' p='xxs' m='2px'>
        <Switch
          {...args}
          label='Goods Design System'
          supText='Pomona Support'
          disabled
          isFit
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
    </Box>
  )
}

export const RTL: Story<SwitchProps> = args => {
  const [value, setValue] = useState(false)
  const [disabled, setDisabled] = useState(false)
  return (
    <Box w='70%' fDir='row' fWrap='wrap'>
      <Box minW='50%'>
        <Switch
          {...args}
          rtl
          label='Goods Design System'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          rtl
          disabled
          label='Goods Design System'
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          rtl
          label='Goods Design System'
          supText='Pomona Support'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='50%'>
        <Switch
          {...args}
          rtl
          label='Goods Design System'
          supText='Pomona Support'
          disabled
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
      <Box minW='48%' bC='black20' b='1px solid' p='xxs' m='2px'>
        <Switch
          {...args}
          rtl
          label='Goods Design System'
          supText='Pomona Support'
          isFit
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box minW='48%' bC='black20' b='1px solid' p='xxs' m='2px'>
        <Switch
          {...args}
          rtl
          label='Goods Design System'
          supText='Pomona Support'
          disabled
          isFit
          checked={disabled}
          onChange={e => setDisabled(e.target.checked)}
        />
      </Box>
    </Box>
  )
}

export const Colorize: Story<SwitchProps> = args => {
  const [value, setValue] = useState(false)
  return (
    <Box w='70%' fDir='row' fWrap='wrap'>
      <Box w>
        <Switch
          {...args}
          bg='black40'
          bgChecked='orange90'
          bgDot='orange90'
          bgDotChecked='black40'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box w>
        <Switch
          {...args}
          bg='blue20'
          bgChecked='green80'
          bgDot='red80'
          bgDotChecked='orange90'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box w>
        <Switch
          {...args}
          bg='transparent'
          bgChecked='red90'
          bgDot='red90'
          bgDotChecked='white10'
          checked={value}
          onChange={e => setValue(e.target.checked)}
          b='1px solid'
          bC='red90'
          h='22px'
        />
      </Box>
      <Box w>
        <Switch
          {...args}
          labelProps={{ c: 'orange90' }}
          label='Goods Design System'
          bg='black40'
          bgChecked='orange90'
          bgDot='orange90'
          bgDotChecked='black40'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box w>
        <Switch
          {...args}
          labelProps={{ c: 'green90' }}
          supColor='blue60'
          label='Goods Design System'
          supText='Pomona Support'
          bg='blue20'
          bgChecked='green80'
          bgDot='red80'
          bgDotChecked='orange90'
          checked={value}
          onChange={e => setValue(e.target.checked)}
        />
      </Box>
      <Box w>
        <Switch
          {...args}
          labelProps={{ c: 'red90' }}
          supColor='red20'
          label='Goods Design System'
          supText='Pomona Support'
          bg='transparent'
          bgChecked='red90'
          bgDot='red90'
          bgDotChecked='white10'
          checked={value}
          onChange={e => setValue(e.target.checked)}
          b='1px solid'
          bC='red90'
          h='22px'
        />
      </Box>
    </Box>
  )
}
