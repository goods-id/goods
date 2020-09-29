import styled, { StyledComponentPropsWithAs } from 'styled-components'
import { compose, merge } from '@styled-system/core'
import { sort } from '../@goods-system/core'
import {
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from '../@goods-system/spacing'
import { color, ColorProps } from '../@goods-system/color'
import {
  typography,
  typographyRule,
  TypographyProps,
  TypographyRuleProps,
} from '../@goods-system/typography'

export interface TextCssProps
  extends TypographyRuleProps,
    TypographyProps,
    MarginProps,
    ColorProps,
    PaddingProps {}

export const Text = styled.p<TextCssProps>(({ c = 'black30', ...props }) => {
  const stylesRule = typographyRule(props)
  const styles = compose(
    typography,
    margin,
    color,
    padding
  )({ c, fontFam: props.theme?.fontBase || 'Rubik', ...props })
  return sort(merge(stylesRule, styles))
})

Text.displayName = 'Text'

export type TextProps = StyledComponentPropsWithAs<'p', TextCssProps>
