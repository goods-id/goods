import { merge } from '@styled-system/core'
import React, { forwardRef, memo } from 'react'
import styled from 'styled-components'
import {
  sort,
  typography,
  TypographyProps,
  typographyRule,
  TypographyRuleProps,
} from '../../@goods-system'
import { BoxProps, BoxStyled } from '../div'

interface RichTextCssProps extends TypographyProps, TypographyRuleProps {}

const RichTextStyled = styled(BoxStyled)<RichTextCssProps>(props => {
  const typographyRuleStyle = typographyRule(props)
  const typographyStyle = typography(props)
  return {
    ...sort(merge(typographyRuleStyle, typographyStyle)),
    'ol, ul': {
      paddingInlineStart: 'inherit',
      listStyle: 'disc',
    },
    'p, span': {
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontStyle: 'inherit',
      fontWeight: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
    },
    img: {
      maxWidth: '100%',
    },
  }
})

export interface RichTextProps extends BoxProps, RichTextCssProps {
  text?: string
}

export const RichText = memo(
  forwardRef<HTMLDivElement, RichTextProps>(({ text, ...props }, ref) => {
    return (
      <RichTextStyled
        ref={ref}
        {...(text && {
          dangerouslySetInnerHTML: { __html: text },
        })}
        {...props}
      />
    )
  })
)
