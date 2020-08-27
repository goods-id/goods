import * as React from 'react'
import styled from 'styled-components'
import {
  FontFamilyProperty,
  FontSizeProperty,
  LetterSpacingProperty,
  LineHeightProperty,
  FontWeightProperty,
  ColorProperty,
  TextAlignProperty,
  MarginProperty,
} from 'csstype'
import { BaseProps } from '../@types/global'
import breakpoints, { InBreakpoint, getValueInBp } from '../breakpoints'

const commonRules = ['title', 'subtitle', 'body', 'caption'] as const
export const desktopRules = [...commonRules, 'body-bold', 'button'] as const
export const mobileRules = [
  ...commonRules,
  'big-button',
  'med-small-button',
] as const

export type DesktopRule = typeof desktopRules[number]
export type MobileRule = typeof mobileRules[number]

type TextBasicSettings = {
  fontWeight: 300 | 400 | 500
  fontSize: '34px' | '21px' | '14px' | '11px'
  lineHeight: '40px' | '32px' | '20px' | '16px'
  letterSpacing: '0.75px' | '0.5px' | '0.25px' | '0px' | '-0.25px' | '-0.5px'
}

type DesktopBasicSettings = {
  [rule in DesktopRule]: TextBasicSettings
}

type MobileBasicSettings = {
  [rule in MobileRule]: TextBasicSettings
}

type TextBreakpoint = 'xs' | 'lg'

export type HTMLText =
  | HTMLParagraphElement
  | HTMLHeadingElement
  | HTMLSpanElement

export interface TextCssProps {
  /**
   * Typography rule for mobile and/or desktop (min-width: 768px).
   * If `rule !== big-button` or `rule !== med-small-button`,
   * it can be used as desktop rule in case desktop rule was `undefined`.
   * */
  rule?: MobileRule
  /**
   * Typography rule for desktop (min-width: 768px).
   * */
  dRule?: DesktopRule
  /**
   * Font family.
   * */
  fontFam?: FontFamilyProperty
  /**
   * Font size. It will override font size value obtained from `rule` or `dRule`.
   * `type TextBreakpoint = 'xs' | 'lg'`.
   * @example `size={{ xs: '14px', lg: '21px' }}`: Font size 14px for mobile view and 21px for desktop view
   * */
  size?: InBreakpoint<FontSizeProperty<string>, TextBreakpoint>
  /**
   * Letter spacing. It will override letter spacing value obtained from `rule` or `dRule`.
   * */
  letterSpace?: InBreakpoint<LetterSpacingProperty<string>, TextBreakpoint>
  /**
   * Line height. It will override line height value obtained from `rule` or `dRule`.
   * */
  lineHeight?: InBreakpoint<LineHeightProperty<string>, TextBreakpoint>
  /**
   * Font weight. It will override font weight value obtained from `rule` or `dRule`.
   * */
  weight?: InBreakpoint<FontWeightProperty, TextBreakpoint>
  /**
   * Margin
   * */
  m?: InBreakpoint<MarginProperty<string>, TextBreakpoint>
  textAlign?: InBreakpoint<TextAlignProperty, TextBreakpoint>
  /**
   * Font color
   * */
  c?: ColorProperty
}

export interface TextProps extends TextCssProps, BaseProps<HTMLText> {}

export const desktopBasicSettings: DesktopBasicSettings = {
  title: {
    fontWeight: 300,
    fontSize: '34px',
    lineHeight: '40px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '21px',
    lineHeight: '32px',
    letterSpacing: '-0.25px',
  },
  caption: {
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.25px',
  },
  button: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25px',
  },
  body: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  'body-bold': {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
}

export const mobileBasicSettings: MobileBasicSettings = {
  title: {
    fontWeight: 500,
    fontSize: '21px',
    lineHeight: '32px',
    letterSpacing: '-0.25px',
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  caption: {
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.25px',
  },
  body: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  'big-button': {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
  },
  'med-small-button': {
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.75px',
  },
}

export const TextStyled = styled.p<TextCssProps>(p => {
  const { rule, dRule, theme, ...props } = p
  const ruleBased = rule && mobileBasicSettings[rule]
  const dRuleBased = dRule
    ? desktopBasicSettings[dRule]
    : rule && rule !== 'big-button' && rule !== 'med-small-button'
    ? desktopBasicSettings[rule]
    : null
  const breakpointLg =
    typeof theme.breakpoints === 'function'
      ? theme.breakpoints('lg')
      : breakpoints('lg')

  return {
    color: props.c || theme?.colors?.black30 || '',
    fontFamily: props.fontFam || theme?.fontBase || 'Rubik',
    fontSize: getValueInBp(props.size, 'xs') || ruleBased?.fontSize || '',
    letterSpacing:
      getValueInBp(props.letterSpace, 'xs') || ruleBased?.letterSpacing || '',
    lineHeight:
      getValueInBp(props.lineHeight, 'xs') || ruleBased?.lineHeight || '',
    fontWeight:
      getValueInBp(props.weight, 'xs') || ruleBased?.fontWeight || 'normal',
    margin: getValueInBp(props.m, 'xs') || '',
    textAlign: getValueInBp(props.textAlign, 'xs') || 'left',

    [breakpointLg]: {
      fontSize:
        getValueInBp(props.size, ['lg', 'xs']) || dRuleBased?.fontSize || '',
      letterSpacing:
        getValueInBp(props.letterSpace, ['lg', 'xs']) ||
        dRuleBased?.letterSpacing ||
        '',
      lineHeight:
        getValueInBp(props.lineHeight, ['lg', 'xs']) ||
        dRuleBased?.lineHeight ||
        '',
      fontWeight:
        getValueInBp(props.weight, ['lg', 'xs']) ||
        dRuleBased?.fontWeight ||
        'normal',
      margin: getValueInBp(props.m, ['lg', 'xs']) || '',
      textAlign: getValueInBp(props.textAlign, ['lg', 'xs']) || 'left',
    },
  }
})

/**
 * Use `Text` component to wrap your typography.
 */
export const Text: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLText>
>> = React.memo(
  React.forwardRef((props, ref) => <TextStyled ref={ref} {...props} />)
)

export default Text
