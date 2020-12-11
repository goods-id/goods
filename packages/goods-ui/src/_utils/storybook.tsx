import React from 'react'
import { Box, BoxProps, Line, Text } from 'goods-core'

export const commonFormConditions = [
  'Normal',
  'Filled',
  'Disabled',
  'Read only',
  'Error',
  'No label',
  'No support text',
  'No label and support text',
] as const

export function isWithValue(condition: string): boolean {
  return ['Filled', 'Disabled', 'Read only', 'Error'].includes(condition)
}

interface TemplateProps extends BoxProps {
  title: string
}

export const Template: React.FC<TemplateProps> = ({
  title,
  children,
  ...rest
}) => {
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

interface ConditionBoxProps extends BoxProps {
  title: string
  c?: BoxProps['c']
  bg?: BoxProps['bg']
}

export const ConditionBox: React.FC<ConditionBoxProps> = ({
  c,
  bg,
  title,
  children,
  ...props
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
      {...props}
    >
      <Text rule='subtitle' c={c} bg={bg}>
        {title}
      </Text>
      <Line my='xs' />
      {children}
    </Box>
  )
}
