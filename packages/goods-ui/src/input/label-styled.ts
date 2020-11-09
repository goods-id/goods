import styled, { InterpolationValue } from 'styled-components'
import { compose, merge } from '@styled-system/core'
import {
  border,
  BorderProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  TransitionProps,
  transition,
} from '@pomona/goods-core'
import { InputStyled, ConditionalProps } from './input-styled'

export interface FilledProps
  extends ColorProps,
    BorderProps,
    TypographyProps,
    PositionProps,
    SpacingProps,
    LayoutProps {}

export interface LabelStyledProps
  extends SpacingProps,
    LayoutProps,
    ColorProps,
    PositionProps,
    TypographyProps,
    FlexboxProps,
    TransitionProps,
    Omit<ConditionalProps, 'placeholderProps'> {
  filledProps?: FilledProps
}

const labelRule = compose(color, border)
const filledRule = compose(color, border, typography, position, spacing, layout)
const styleFn = compose(
  spacing,
  layout,
  color,
  typography,
  position,
  flexbox,
  transition
)

export const LabelStyled = styled.label<LabelStyledProps>(
  ({
    c = 'black20',
    fSize = '14px',
    bg = 'white30',
    weight = 'normal',
    posi = 'absolute',
    left = '12px',
    top = '16px',
    isError,
    disabledProps,
    errorProps,
    focusProps,
    hoverProps,
    filledProps,
    tDuration = 200,
    tTimingFunction = 'ease',
    tProperty = 'top, font-size, color, padding',
    ...props
  }) => {
    const { theme } = props
    const disabledStyle = labelRule({
      c: 'black20',
      bg: 'white40',
      theme,
      ...disabledProps,
    })

    const hoverStyle = labelRule({
      bg: 'blue10',
      theme,
      ...hoverProps,
    })

    const errorStyle = labelRule({
      c: 'red80',
      bg: 'red10',
      theme,
      ...errorProps,
    })

    const focusStyle = labelRule({
      c: 'blue50',
      theme,
      ...focusProps,
    })

    const filledStyle = filledRule({
      c: isError ? undefined : 'blue50',
      fSize: '11px',
      pt: 'xxxs',
      bTopRightRad: 'full',
      w: left ? `calc(100% - ${left} - 1px)` : 'calc(100% - 1px)',
      top: '1px',
      theme,
      ...filledProps,
    })

    const style = styleFn({
      c,
      fSize,
      weight,
      posi,
      left,
      top,
      bg,
      tDuration,
      tTimingFunction,
      tProperty,
      ...props,
    })

    const defaultStyle: InterpolationValue = {
      pointerEvents: 'none',
      [`${InputStyled}.error ~ &`]: errorStyle,
      [`${InputStyled}:not(.error):not(:focus):placeholder-shown:not(:hover) ~ &:not(.label-input-filled)`]: style,
      [`${InputStyled}:not(.error):focus ~ &`]: focusStyle,
      [`${InputStyled}:focus ~ &, ${InputStyled}:not(:placeholder-shown) ~ &`]: filledStyle,
      [`${InputStyled}:not(.error):hover ~ &`]: hoverStyle,
      [`${InputStyled}:not(.error):disabled ~ &, ${InputStyled}:not(.error):disabled:not(:focus):placeholder-shown:not(:hover) ~ &`]: disabledStyle,
    }

    const result = merge(merge(defaultStyle, style), {
      '&.label-input-filled': filledStyle,
    })

    return result
  }
)
