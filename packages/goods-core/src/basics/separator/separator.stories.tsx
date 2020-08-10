import React from 'react'
import { Separator } from '.'

export default {
  title: 'Basics/Separator',
  component: Separator,
}

export const SeparatorExample: React.FC = () => {
  return <Separator w="300px" h="4px" m="32px" bg="red" radius="8px" />
}
