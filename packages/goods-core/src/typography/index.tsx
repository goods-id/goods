import styled from 'styled-components'
import { compose } from 'styled-system'
import { StyledComponentProps } from '../@types/global'
import { merge, sort } from '../@goods-system/core'
import { margin, MarginProps } from '../@goods-system/spacing'
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
    ColorProps {}

export const Text = styled.p<TextCssProps>(({ c = 'black30', ...props }) => {
  const stylesRule = typographyRule(props)
  const styles = compose(
    typography,
    margin,
    color
  )({ c, fontFam: props.theme?.fontBase || 'Rubik', ...props })
  return sort(merge(stylesRule, styles))
})

export type TextProps = StyledComponentProps<'p', TextCssProps>
