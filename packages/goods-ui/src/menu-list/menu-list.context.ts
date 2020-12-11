import { createContext, useContext } from 'react'
import { BoxProps } from 'goods-core'

export interface ContextValue {
  activeItemId?: string
  onClickMenu: (activeItemId: string) => void | Promise<void>
  cActive?: BoxProps['c']
  cInactive?: BoxProps['c']
  bgHover?: BoxProps['c']
}

export const MenuListContext = createContext<ContextValue>({
  activeItemId: undefined,
  onClickMenu: () => {},
})

export function useMenuListContext(): ContextValue {
  return useContext(MenuListContext)
}
