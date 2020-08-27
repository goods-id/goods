import React from 'react'
import styled from 'styled-components'
import { BackgroundColorProperty, ColorProperty } from 'csstype'
import { TextStyled, TextProps, HTMLText } from '../../typography'

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

export const AnchorStyled = styled(TextStyled)<AnchorProps>(props => {
  const { hoverBg, hoverColor } = props
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
