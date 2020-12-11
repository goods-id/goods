import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, useGoods } from 'goods-core'
import { Button, ButtonProps } from './button'

const storyMetaData: Meta<ButtonProps> = {
  title: 'Component/Button',
  component: Button,
}

export default storyMetaData

export const ButtonExample: Story<ButtonProps> = () => (
  <Box w>
    <Button>Button</Button>
  </Box>
)

export const Basic: Story<ButtonProps> = () => {
  const { colors } = useGoods()
  return (
    <Box w>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button>Basic</Button>
        </Box>
        <Box w p='m'>
          <Button disabled>Disabled</Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button>Pressed v1</Button>
        </Box>
        <Box w p='m'>
          <Button isLoading>Disabled</Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button b={`1px solid ${colors?.blue50}`} bg='white10' c='blue50'>
            Outline
          </Button>
        </Box>
        <Box w p='m'>
          <Button
            prefixContainer={{ m: 'xxxs' }}
            prefix={{
              icName: 'home',
              icColor: colors?.white10,
              icSize: 'small',
            }}
          >
            Icon
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export const Primary: Story<ButtonProps> = () => {
  const { colors } = useGoods()
  return (
    <Box w>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button bg='orange90'>Primary</Button>
        </Box>
        <Box w p='m'>
          <Button bg='orange90' disabled>
            Disabled
          </Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button bg='orange90'>Pressed v1</Button>
        </Box>
        <Box w p='m'>
          <Button bg='orange90' isLoading>
            Disabled
          </Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button b={`1px solid ${colors?.orange90}`} bg='white10' c='orange90'>
            Outline
          </Button>
        </Box>
        <Box w p='m'>
          <Button
            bg='orange90'
            prefix={{ icName: 'search', icColor: colors?.white10 }}
          >
            Icon
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export const Plain: Story<ButtonProps> = () => {
  const { colors } = useGoods()
  return (
    <Box w>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button bg='transparent' c='blue50'>
            Primary
          </Button>
        </Box>
        <Box w p='m'>
          <Button bg='transparent' disabled c='blue50'>
            Disabled
          </Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button bg='transparent' c='blue50'>
            Pressed v1
          </Button>
        </Box>
        <Box w p='m'>
          <Button bg='transparent' isLoading loadingColor='blue50'>
            Disabled
          </Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button b={`1px solid ${colors?.blue50}`} bg='transparent' c='blue50'>
            Outline
          </Button>
        </Box>
        <Box w p='m'>
          <Button
            bg='transparent'
            c='blue50'
            prefix={{ icName: 'search', icColor: colors?.blue50 }}
          >
            Icon
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export const Destructive: Story<ButtonProps> = () => {
  const { colors } = useGoods()
  return (
    <Box w>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button bg='red60'>Destructive</Button>
        </Box>
        <Box w p='m'>
          <Button bg='red60' disabled>
            Disabled
          </Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button bg='red60'>Pressed v1</Button>
        </Box>
        <Box w p='m'>
          <Button bg='red60' isLoading>
            Disabled
          </Button>
        </Box>
      </Box>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button b={`1px solid ${colors?.red60}`} bg='white10' c='red60'>
            Outline
          </Button>
        </Box>
        <Box w p='m'>
          <Button
            bg='red60'
            prefix={{ icName: 'search', icColor: colors?.white10 }}
          >
            Icon
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export const Size: Story<ButtonProps> = () => {
  return (
    <Box w>
      <Box w fDir='row'>
        <Box w p='m'>
          <Button buttonSize='small'>SMALL</Button>
        </Box>
        <Box w p='m'>
          <Button buttonSize='medium'>MEDIUM</Button>
        </Box>
        <Box w p='m'>
          <Button buttonSize='big'>BIG</Button>
        </Box>
      </Box>
    </Box>
  )
}
