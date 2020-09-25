import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, InputProps } from './input'
import { Icon, Text, useGoods, Box } from '../../../goods-core/src'

const storyMetaData: Meta<InputProps> = {
  title: 'Component/Input',
  component: Input,
}

export default storyMetaData

export const InputExample: Story<InputProps> = args => {
  return <Input {...args} />
}

InputExample.args = {
  w: true,
  label: 'Label Tex',
  placeholder: 'Placeholder Text',
  supText: 'Support Text',
  type: 'text',
  containerProps: {
    w: 1,
  },
}

export const Basic: Story<InputProps> = () => {
  return (
    <Box w p='s'>
      <Box w mb='xs'>
        <Text>Initial / Empty</Text>
        <Input
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Filled</Text>
        <Input
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Error</Text>
        <Input
          isError
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Disabled</Text>
        <Input
          disabled
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
    </Box>
  )
}

export const BasicPrefixSuffix: Story<InputProps> = args => {
  const { colors } = useGoods()
  return (
    <Box w p='s'>
      <Box w mb='xs'>
        <Text>Initial / Empty</Text>
        <Input
          {...args}
          prefix={
            <Text c='black20' rule='body'>
              Rp
            </Text>
          }
          suffix={<Icon name='search' c={colors.black20} />}
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Filled</Text>
        <Input
          {...args}
          prefix={
            <Text c='black20' rule='body'>
              Rp
            </Text>
          }
          suffix={<Icon name='search' c={colors.black20} />}
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Error</Text>
        <Input
          {...args}
          prefix={
            <Text c='black20' rule='body'>
              Rp
            </Text>
          }
          suffix={<Icon name='search' c={colors.black20} />}
          isError
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Disabled</Text>
        <Input
          {...args}
          prefix={
            <Text c='black20' rule='body'>
              Rp
            </Text>
          }
          suffix={<Icon name='search' c={colors.black20} />}
          disabled
          label='Label Text'
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
    </Box>
  )
}

export const BasicNoLabel: Story<InputProps> = args => {
  const { colors } = useGoods()
  return (
    <Box w p='s'>
      <Box w mb='xs'>
        <Text>Initial / Empty</Text>
        <Input
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Filled</Text>
        <Input
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Error</Text>
        <Input
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          isError
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Disabled</Text>
        <Input
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          disabled
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
    </Box>
  )
}

export const Textarea: Story<InputProps> = args => {
  const { colors } = useGoods()
  return (
    <Box w p='s'>
      <Box w mb='xs'>
        <Text>Initial / Empty</Text>
        <Input
          as='textarea'
          resize='none'
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Filled</Text>
        <Input
          as='textarea'
          resize='none'
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam pellentesque nisl, et pretium purus. Praesent luctus a ipsum in commodo. Morbi id dolor cursus, dignissim massa bibendum, gravida tellus. Maecenas tincidunt magna nec ex sodales, non egestas nulla consectetur. In dignissim sapien eu felis ultrices, et condimentum sem pretium. Pellentesque imperdiet turpis ac lectus fringilla, vel vulputate eros egestas. Fusce dictum placerat mollis. Maecenas in iaculis massa, ut aliquam lorem. Sed vulputate sed tellus sit amet cursus. Ut sit amet venenatis diam. Aenean massa nulla, rutrum in finibus ut, fringilla sagittis tortor. Cras porta fringilla lectus, id tincidunt purus accumsan nec. Nulla sit amet tincidunt nulla, sed vehicula turpis. Quisque sit amet egestas lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Error</Text>
        <Input
          as='textarea'
          resize='none'
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          isError
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
      <Box w mb='xs'>
        <Text>Disabled</Text>
        <Input
          as='textarea'
          resize='none'
          {...args}
          suffix={<Icon name='search' c={colors.black20} />}
          disabled
          placeholder='Placeholder Text'
          supText='Support Text'
          type='Text'
          value='Input Text'
        />
      </Box>
    </Box>
  )
}
