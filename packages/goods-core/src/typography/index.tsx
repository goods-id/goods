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
import { BaseProps } from '../@types/core'
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

export interface TextCssProps {
  rule?: MobileRule
  dRule?: DesktopRule
  fontFam?: FontFamilyProperty
  size?: InBreakpoint<FontSizeProperty<string>, TextBreakpoint>
  letterSpace?: InBreakpoint<LetterSpacingProperty<string>, TextBreakpoint>
  lineHeight?: InBreakpoint<LineHeightProperty<string>, TextBreakpoint>
  weight?: InBreakpoint<FontWeightProperty, TextBreakpoint>
  m?: InBreakpoint<MarginProperty<string>, TextBreakpoint>
  textAlign: InBreakpoint<TextAlignProperty, TextBreakpoint>
  c?: ColorProperty
}

export interface TextProps
  extends TextCssProps,
    BaseProps<HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement> {}

const desktopBasicSettings: DesktopBasicSettings = {
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

const mobileBasicSettings: MobileBasicSettings = {
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
    fontSize: '21px',
    lineHeight: '32px',
    letterSpacing: '-0.25px',
  },
  'med-small-button': {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
  },
}

const P = styled.p<TextCssProps>(({ rule, dRule, theme, ...props }) => {
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
    fontFamily: props.fontFam || 'Rubik',
    fontSize: getValueInBp(props.size, 'xs') || ruleBased?.fontSize || '',
    letterSpacing:
      getValueInBp(props.letterSpace, 'xs') || ruleBased?.letterSpacing || '',
    lineHeight:
      getValueInBp(props.lineHeight, 'xs') || ruleBased?.lineHeight || '',
    fontWeight:
      getValueInBp(props.weight, 'xs') || ruleBased?.fontWeight || 'normal',
    margin: getValueInBp(props.m, 'xs') || '',
    textAlign: getValueInBp(props.textAlign, 'xs'),

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
      textAlign: getValueInBp(props.textAlign, ['lg', 'xs']) || '',
    },
  }
})

const Text: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLParagraphElement>
>> = React.memo(React.forwardRef((props, ref) => <P ref={ref} {...props} />))

export default Text
