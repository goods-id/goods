import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Icon, Image } from 'goods-core'
import { Radio, RadioProps, RadioItemProps } from './radio'

const storyMetaData: Meta = {
  title: 'Component/Radio',
  component: Radio,
  subcomponents: { RadioItem: Radio.Item },
  parameters: { controls: { disable: true } },
}

export default storyMetaData

interface RadioAndItemProps extends Omit<RadioProps, 'value' | 'name'> {
  itemProps?: Omit<RadioItemProps, 'value' | 'ref'>
}

export const Basic: Story<RadioAndItemProps> = ({ itemProps, ...args }) => {
  const [value, setValue] = useState('')
  return (
    <Radio
      name='example'
      value={value}
      onChange={e => setValue(e.target.value)}
      {...args}
    >
      <Radio.Item value='option1' {...itemProps}>
        Option 1
      </Radio.Item>
      <Radio.Item value='option2' {...itemProps}>
        Option 2
      </Radio.Item>
      <Radio.Item value='option3' disabled {...itemProps}>
        Option 3
      </Radio.Item>
      <Radio.Item value='option4' {...itemProps}>
        Option 4
      </Radio.Item>
    </Radio>
  )
}

export const RTL: Story<RadioAndItemProps> = ({ itemProps, ...args }) => {
  const [value, setValue] = useState('')
  return (
    <Radio
      name='example'
      value={value}
      onChange={e => setValue(e.target.value)}
      rtl
      {...args}
    >
      <Radio.Item value='option1' {...itemProps}>
        Option 1
      </Radio.Item>
      <Radio.Item value='option2' {...itemProps}>
        Option 2
      </Radio.Item>
      <Radio.Item value='option3' disabled {...itemProps}>
        Option 3
      </Radio.Item>
      <Radio.Item value='option4' {...itemProps}>
        Option 4
      </Radio.Item>
    </Radio>
  )
}

export const Colorize: Story<RadioAndItemProps> = ({ itemProps, ...args }) => {
  const [value, setValue] = useState('')
  return (
    <Radio
      name='example'
      value={value}
      onChange={e => setValue(e.target.value)}
      {...args}
    >
      <Radio.Item
        value='option1'
        bg='blue50'
        iconSelected={<Icon name='radioActive' c='black40' />}
        icon={<Icon name='radio' c='white10' />}
        {...itemProps}
      >
        Option 1
      </Radio.Item>
      <Radio.Item value='option2' bg='green50' {...itemProps}>
        Option 2
      </Radio.Item>
      <Radio.Item value='option3' bg='red60' disabled {...itemProps}>
        Option 3
      </Radio.Item>
      <Radio.Item value='option4' bg='orange90' {...itemProps}>
        Option 4
      </Radio.Item>
    </Radio>
  )
}

export const ImageItem: Story<RadioAndItemProps> = ({ itemProps, ...args }) => {
  const [value, setValue] = useState('')
  return (
    <Radio
      name='example'
      value={value}
      onChange={e => setValue(e.target.value)}
      {...args}
    >
      <Radio.Item value='option1' {...itemProps}>
        <Image
          alt='Option 1'
          src='https://cdn-brilio-net.akamaized.net/news/2020/07/09/187938/1264928-gege-elisa.jpg'
          s='64px'
          objectFit='contain'
        />
      </Radio.Item>
      <Radio.Item value='option2' {...itemProps}>
        <Image
          alt='Option 2'
          src='https://d2halst20r4hcy.cloudfront.net/218/c27ab/ae78/4ce9/9e84/09f9ef0dadfc/original/3261689.jpg'
          s='64px'
          objectFit='contain'
        />
      </Radio.Item>
      <Radio.Item value='option3' disabled {...itemProps}>
        <Image
          alt='Option 3'
          src='https://1.bp.blogspot.com/-lFwkhEFFwx4/Xr6YUQpucrI/AAAAAAAABKc/5zCRfL_z1Gcw_7bRkCq_A7isgzXxKHwUACNcBGAsYHQ/s1600/leanna-leonardo-viennalate-28.jpg'
          s='64px'
          objectFit='contain'
        />
      </Radio.Item>
      <Radio.Item value='option4' {...itemProps}>
        <Image
          alt='Option 4'
          src='https://d5qmjlya0ygtg.cloudfront.net/636/640/092/710003026-1s162k1-5nhr01d605dbiia/original/file.jpg'
          s='64px'
          objectFit='contain'
        />
      </Radio.Item>
    </Radio>
  )
}

export const CustomIcon: Story<RadioAndItemProps> = ({
  itemProps,
  ...args
}) => {
  const [value, setValue] = useState('')
  return (
    <Radio
      name='example'
      value={value}
      onChange={e => setValue(e.target.value)}
      {...args}
    >
      <Radio.Item
        value='option1'
        iconSelected={<Icon name='approved' c='green90' />}
        {...itemProps}
      >
        Option 1
      </Radio.Item>
      <Radio.Item
        value='option2'
        iconSelected={<Icon name='pomona' c='blue50' />}
        {...itemProps}
      >
        Option 2
      </Radio.Item>
      <Radio.Item
        value='option3'
        disabled
        iconDisabled={<Icon name='rejected' c='red60' />}
        {...itemProps}
      >
        Option 3
      </Radio.Item>
      <Radio.Item
        value='option4'
        iconSelected={<Icon name='point' c='orange90' />}
        {...itemProps}
      >
        Option 4
      </Radio.Item>
    </Radio>
  )
}
