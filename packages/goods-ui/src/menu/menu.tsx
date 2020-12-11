import * as React from 'react'
import { useCallback } from 'react'
import styled, { InterpolationValue } from 'styled-components'
import { merge } from '@styled-system/core'
import {
  Box,
  BoxProps,
  hexToRgba,
  TextProps,
  Text,
  BoxStyled,
  typography,
  TypographyProps,
} from 'goods-core'
import { getColor } from '../_utils/helpers'
import { useMenuContext } from './menu-context'

interface MenuItemProps extends BoxProps, TypographyProps {
  active: boolean
  cActive: TextProps['c']
  cInactive: TextProps['c']
}

export interface MenuListItem {
  title: string
  url?: string
  itemId: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  target?: '_blank' | '_self' | (string & {})
}

export interface MenuProps extends BoxProps {
  items: MenuListItem[]
}

const MenuItem = styled(BoxStyled)<MenuItemProps>(
  ({ active, cActive, cInactive, textDecor = 'none', theme, ...props }) => {
    const textColor = active ? cActive : cInactive
    const textColorHex = hexToRgba(getColor(textColor, theme), 1.0)

    const spanStyle = {
      cursor: 'pointer',
      textDecoration: 'none !important',
      color: textColorHex,
    }

    const defaultStyle: InterpolationValue = {
      span: { ...spanStyle },
      textDecoration: 'none !important',
      ...(active && {
        '&::before': {
          content: '""',
          display: 'inline-block',
          width: '4px',
          height: '24px',
          position: 'absolute',
          left: '0px',

          backgroundColor: hexToRgba(getColor(cActive, theme), 1.0),
          borderRadius: '4px',
        },
      }),
    }

    const style = typography({
      textDecor,
      theme,
      ...props,
    })

    return merge(defaultStyle, style)
  }
)

export const Menu = React.memo(
  React.forwardRef<HTMLDivElement, MenuProps>(({ items, ...props }, ref) => {
    const {
      activeItemId,
      onClickMenu,
      cActive,
      cInactive,
      bgHover,
    } = useMenuContext()

    const onClick = useCallback(
      (
        event: React.MouseEvent<HTMLAnchorElement & HTMLDivElement, MouseEvent>
      ) => {
        onClickMenu(event.currentTarget.dataset?.index || '', event)
      },
      [activeItemId]
    )

    return (
      <Box w posi='relative' ref={ref} {...props}>
        {items.map(({ itemId, url, target, title }) => {
          const isActive = activeItemId === itemId
          return (
            <MenuItem
              className='goods-menu-item'
              id={`goods-menu-item-${itemId}`}
              key={itemId}
              data-index={itemId}
              cursor='pointer'
              hoverProps={{ bg: bgHover }}
              cActive={cActive}
              cInactive={cInactive}
              onClick={onClick}
              fAlign='center'
              fDir='row'
              pl='xl'
              pb='xxxs'
              pt='xxxs'
              as='a'
              active={isActive}
              href={url}
              target={target}
            >
              <Text as='span' rule='body'>
                {title}
              </Text>
            </MenuItem>
          )
        })}
      </Box>
    )
  })
)

Menu.displayName = 'Menu'
