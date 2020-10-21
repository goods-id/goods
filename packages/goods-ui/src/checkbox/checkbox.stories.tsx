import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, Line, Text } from '@pomona/goods-core'
import { Checkbox, CheckboxProps } from './checkbox'

const storyMetaData: Meta<CheckboxProps> = {
  title: 'Component/Checkbox',
  component: Checkbox,
}

export default storyMetaData

export const CheckboxExample: Story<CheckboxProps> = () => {
  const [checkbox, setcheckbox] = useState(false)
  return (
    <Checkbox
      name='goods-checkbox'
      label='Goods Design System'
      checked={checkbox}
      onChange={e => setcheckbox(e.target.checked)}
    />
  )
}

export const Basic: Story<CheckboxProps> = () => {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)

  return (
    <Box w p='s'>
      <Box w>
        <Text rule='body-bold'>Basic</Text>
        <Checkbox name='a' checked={a} onChange={e => setA(e.target.checked)} />
      </Box>
      <Box w>
        <Text rule='body-bold'>Basic with Label</Text>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - label'
          checked={b}
          onChange={e => setB(e.target.checked)}
        />
      </Box>
      <Box px='s' w={1 / 2} bRight='1px solid' bLeft='1px solid' bC='black30'>
        <Text rule='body-bold'>Basic with Label</Text>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - fit wrapper'
          isFit
          checked={c}
          onChange={e => setC(e.target.checked)}
        />
      </Box>
      <Line my='m' />
      <Box w>
        <Text rule='body-bold'>Basic - Disabled</Text>
        <Checkbox
          disabled
          name='a'
          checked={a}
          onChange={e => setA(e.target.checked)}
        />
      </Box>
      <Box w>
        <Text rule='body-bold'>Basic with Label - Disabled</Text>
        <Checkbox
          disabled
          name='checkbox-baru'
          label='Goods Design System - label'
          checked={b}
          onChange={e => setB(e.target.checked)}
        />
      </Box>
      <Box px='s' w={1 / 2} bRight='1px solid' bLeft='1px solid' bC='black30'>
        <Text rule='body-bold'>Basic with Label - Disabled</Text>
        <Checkbox
          disabled
          name='checkbox-baru'
          label='Goods Design System - fit wrapper'
          isFit
          checked={c}
          onChange={e => setC(e.target.checked)}
        />
      </Box>
    </Box>
  )
}

export const RTL: Story<CheckboxProps> = () => {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  return (
    <Box w p='s'>
      <Box w>
        <Text rule='body-bold'>RTL</Text>
        <Checkbox
          name='checkbox-baru'
          rtl
          label='Goods Design System - RTL'
          checked={a}
          onChange={e => setA(e.target.checked)}
        />
      </Box>
      <Box w>
        <Text rule='body-bold'>RTL with Support Text</Text>
        <Checkbox
          name='checkbox-baru'
          rtl
          label='Goods Design System - RTL Support Text'
          supText='Support Text'
          checked={b}
          onChange={e => setB(e.target.checked)}
        />
      </Box>
      <Box px='s' w={1 / 2} bRight='1px solid' bLeft='1px solid' bC='black30'>
        <Text rule='body-bold'>RTL with Support Text - Fit Wrapper</Text>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - fit wrapper'
          isFit
          rtl
          checked={c}
          onChange={e => setC(e.target.checked)}
        />
      </Box>
      <Line my='m' />
      <Box w>
        <Text rule='body-bold'>RTL - Disabled</Text>
        <Checkbox
          name='checkbox-baru'
          disabled
          rtl
          label='Goods Design System - RTL'
          checked={a}
          onChange={e => setA(e.target.checked)}
        />
      </Box>
      <Box w>
        <Text rule='body-bold'>RTL with Support Text - Disabled</Text>
        <Checkbox
          name='checkbox-baru'
          disabled
          rtl
          label='Goods Design System - RTL Support Text'
          supText='Support Text'
          checked={b}
          onChange={e => setB(e.target.checked)}
        />
      </Box>
      <Box px='s' w={1 / 2} bRight='1px solid' bLeft='1px solid' bC='black30'>
        <Text rule='body-bold'>
          RTL with Support Text - Fit Wrapper - Disabled
        </Text>
        <Checkbox
          name='checkbox-baru'
          disabled
          label='Goods Design System - fit wrapper'
          isFit
          rtl
          checked={c}
          onChange={e => setC(e.target.checked)}
        />
      </Box>
    </Box>
  )
}

export const Colorize: Story<CheckboxProps> = () => {
  const [a, setA] = useState(false)
  return (
    <Box w p='s'>
      <Box w>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - RED'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='red60'
          defaultC='red60'
        />
      </Box>
      <Box w>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - ORANGE'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='orange90'
          defaultC='orange90'
        />
      </Box>
      <Box w>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - GREEN'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='green50'
          defaultC='green50'
        />
      </Box>
      <Box w>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - BLACK'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='black30'
          defaultC='black30'
        />
      </Box>
      <Box w>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - WHITE'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='white30'
          defaultC='white30'
        />
      </Box>
      <Line my='m' />
      <Box w>
        <Checkbox
          bg='blue50'
          fill='blue50'
          name='checkbox-baru'
          label='Goods Design System - BG BLUE'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='white10'
          defaultC='white10'
        />
      </Box>
      <Box w>
        <Checkbox
          bg='orange90'
          fill='orange90'
          name='checkbox-baru'
          label='Goods Design System - BG ORANGE'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='white10'
          defaultC='white10'
        />
      </Box>
      <Box w>
        <Checkbox
          bg='green50'
          fill='green50'
          name='checkbox-baru'
          label='Goods Design System - BG GREEN'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='white10'
          defaultC='white10'
        />
      </Box>
      <Box w>
        <Checkbox
          bg='red60'
          fill='red60'
          name='checkbox-baru'
          label='Goods Design System - BG GREEN'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='white10'
          defaultC='white10'
        />
      </Box>
      <Line my='m' />
      <Box w>
        <Checkbox
          bg='red60'
          fill='red60'
          name='checkbox-baru'
          label='Goods Design System - BG GREEN - Disabled'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='white10'
          defaultC='white10'
          disabled
        />
      </Box>
      <Box w>
        <Checkbox
          name='checkbox-baru'
          label='Goods Design System - RED - Disabled'
          checked={a}
          onChange={e => setA(e.target.checked)}
          checkedC='red60'
          defaultC='red60'
          disabled
        />
      </Box>
    </Box>
  )
}
