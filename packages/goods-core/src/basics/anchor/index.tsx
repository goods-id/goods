import React from 'react'
import styled from 'styled-components'
import { BackgroundColorProperty, ColorProperty } from 'csstype'
import { Text, TextProps, HTMLText } from '../../typography'

interface AnchorCssProps {
  /**
   * Hover Background Color
   */
  hoverBg?: BackgroundColorProperty
  /**
   * Hover Text Color
   */
  hoverColor?: ColorProperty
}

export interface AnchorProps extends AnchorCssProps, TextProps {}

const AnchorStyled = styled(Text)<AnchorProps>(({ hoverBg, hoverColor }) => {
  return {
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: hoverBg,
      color: hoverColor,
    },
  }
})

export const Anchor: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  AnchorProps & React.RefAttributes<HTMLText>
>> = React.memo(
  React.forwardRef((props, ref) => <AnchorStyled ref={ref} as="a" {...props} />)
)

export default Anchor
