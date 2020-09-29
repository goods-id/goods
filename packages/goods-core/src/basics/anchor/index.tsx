import React from 'react'
import styled, { CSSObject, StyledComponentProps } from 'styled-components'
import { compose, ThemeType } from '@styled-system/core'
import { Text, TextCssProps } from '../../typography'
import {
  LayoutProps,
  CustomSelector,
  layout,
  typography,
  hover,
  merge,
} from '../../@goods-system'

interface AnchorCssProps<T extends ThemeType = ThemeType>
  extends LayoutProps<T>,
    Pick<CustomSelector<T>, 'hoverProps'> {}

export interface AnchorStyledProps extends AnchorCssProps, TextCssProps {}

const styleFn = compose(layout, typography)

export const AnchorStyled = styled(Text)<AnchorProps>(
  ({ d = 'block', textDecor = 'none', hoverProps = {}, ...props }) => {
    const baseStyle = styleFn({ textDecor, d, ...props })
    const otherStyle: CSSObject = {
      cursor: 'pointer',
      ...hover({ theme: props.theme, ...hoverProps }),
    }
    return merge(baseStyle, otherStyle)
  }
)

AnchorStyled.displayName = 'AnchorStyled'

export type AnchorProps = StyledComponentProps<
  'a',
  ThemeType,
  AnchorStyledProps,
  never
>

export const Anchor: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  AnchorProps & React.RefAttributes<HTMLAnchorElement>
>> = React.memo(
  React.forwardRef((props, ref) => <AnchorStyled ref={ref} as='a' {...props} />)
)

Anchor.displayName = 'Anchor'

export default Anchor
