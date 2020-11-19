import React, { forwardRef, memo } from 'react'
import { Box, BoxProps } from '@pomona/goods-core'
import { ContextValue, MenuContext } from './menu-context'

export interface MenuGroupProps extends ContextValue, BoxProps {}

export const MenuGroup = memo(
  forwardRef<HTMLDivElement, MenuGroupProps>(
    (
      {
        activeItemId,
        children,
        onClickMenu,
        cActive = 'blue50',
        cInactive = 'black30',
        bgHover = 'blue20',
        ...props
      },
      ref
    ) => {
      return (
        <MenuContext.Provider
          value={{
            activeItemId,
            onClickMenu,
            cActive,
            cInactive,
            bgHover,
          }}
        >
          <Box {...props} ref={ref}>
            {children}
          </Box>
        </MenuContext.Provider>
      )
    }
  )
)

MenuGroup.displayName = 'MenuGroup'
