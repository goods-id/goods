import React from 'react'
import { Image } from '.'
import { useGoods } from '../../goods-context'

export default {
  title: 'Core/Image',
  component: Image,
}

export const ImageExample: React.FC = () => {
  const { spacing } = useGoods()
  return (
    <Image
      alt="gege-elisa"
      src="https://i.pinimg.com/originals/37/5c/49/375c49ca374a122c638f84d3adb8adcd.jpg"
      w="300px"
      p={spacing('m')}
      radius="32px"
    />
  )
}
