import * as React from 'react'
import { useCallback } from 'react'
import styled, { InterpolationValue } from 'styled-components'
import { compose, merge } from '@styled-system/core'
import {
  flexbox,
  layout,
  spacing,
  color,
  Box,
  BoxProps,
  hexToRgba,
  TextProps,
} from '@pomona/goods-core'
import { getColor } from '../_utils/helpers'
import { useMenuListContext } from './menu-list.context'

export interface MenuListItem {
  title: string
  url: string
  itemId: string
}

export interface MenuListProps extends BoxProps {
  items: MenuListItem[]
}

const styleFn = compose<BoxProps>(spacing, color, layout, flexbox)

interface MenuItemProps extends TextProps {
  active: boolean
  cActive: TextProps['c']
  cInactive: TextProps['c']
}

const MenuItem = styled(Box)<MenuItemProps>(
  ({
    pl = 'xl',
    pb = 'xxxs',
    pt = 'xxxs',
    active,
    cActive,
    cInactive,
    ...props
  }) => {
    const textColor = active ? cActive : cInactive
    const defaultStyle: InterpolationValue = {
      ...(active && {
        '&::before': {
          content: '""',
          display: 'inline-block',
          width: '4px',
          height: '24px',
          position: 'absolute',
          left: '0px',

          backgroundColor: hexToRgba(getColor(cActive, props.theme), 1.0),
          borderRadius: '4px',
        },
        color: hexToRgba(getColor(textColor, props.theme), 1.0),
      }),
    }

    const style = styleFn({
      pl,
      pb,
      pt,
      ...props,
    })

    return merge(defaultStyle, style)
  }
)

export const MenuList: any = React.memo<MenuListProps>(
  React.forwardRef(({ items, ...props }, ref) => {
    const {
      activeItemId,
      onClickMenu,
      cActive,
      cInactive,
      bgHover,
    } = useMenuListContext()

    const onClick = useCallback(
      (
        event: React.MouseEvent<HTMLAnchorElement & HTMLDivElement, MouseEvent>
      ) => {
        onClickMenu(event.currentTarget.dataset?.index || '')
      },
      [activeItemId]
    )

    return (
      <Box w='100%' posi='relative' ref={ref} {...props}>
        {items.map(item => {
          const isActive = activeItemId === item.itemId
          return (
            <MenuItem
              data-index={item.itemId}
              active={isActive}
              cursor='pointer'
              hoverProps={{ bg: bgHover }}
              rule='body'
              cActive={cActive}
              cInactive={cInactive}
              onClick={onClick}
              fAlign='center'
              fDir='row'
            >
              {item.title}
            </MenuItem>
          )
        })}
      </Box>
    )
  })
)

MenuList.displayName = 'MenuList'
