import React from 'react'
import styled from 'styled-components'
import { BackgroundColorProperty, ColorProperty } from 'csstype'
import { Text, TextCssProps } from '../../typography'
import { StyledComponentProps } from '../../@types/global'

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

export interface AnchorProps extends AnchorCssProps, TextCssProps {}

export const AnchorStyled = styled(Text)<AnchorProps>(props => {
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
  Omit<StyledComponentProps<'a', AnchorProps>, 'as'> &
    React.RefAttributes<HTMLAnchorElement>
>> = React.memo(
  React.forwardRef((props, ref) => <AnchorStyled ref={ref} as="a" {...props} />)
)

export default Anchor
