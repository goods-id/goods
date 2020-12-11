import { createContext, useContext } from 'react'
import { BoxProps } from 'goods-core'

export interface ContextValue {
  activeItemId?: string
  onClickMenu: (
    activeItemId: string,
    event: React.MouseEvent<HTMLAnchorElement & HTMLDivElement, MouseEvent>
  ) => void | Promise<void>
  cActive?: BoxProps['c']
  cInactive?: BoxProps['c']
  bgHover?: BoxProps['c']
}

export const MenuContext = createContext<ContextValue>({
  activeItemId: undefined,
  onClickMenu: () => {},
})

export function useMenuContext(): ContextValue {
  return useContext(MenuContext)
}
