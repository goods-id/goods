import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, BoxProps } from '@pomona/goods-core'
import { Menu, MenuListItem } from './menu'
import { MenuGroup } from './menu-group'
import { ConditionBox, Template } from '../_utils/storybook'

const storyMetaData: Meta = {
  title: 'Component/Menu',
  component: MenuGroup,
  subcomponents: {
    Menu,
  },
}

const menuItems: MenuListItem[] = [
  { title: 'Sub Item #1', itemId: '1', target: '_blank' },
  { title: 'Sub Item #2', itemId: '2' },
  { title: 'Sub Item #3', itemId: '3' },
]

export default storyMetaData

interface MenuDemoProps {
  children?: React.ReactNode
  cActive?: BoxProps['c']
  cInactive?: BoxProps['c']
  bgHover?: BoxProps['c']
}

const MenuDemo = ({ children, cActive, cInactive, bgHover }: MenuDemoProps) => {
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>('')

  return (
    <Box w bg='white30'>
      <MenuGroup
        onClickMenu={activeItemId => setSelectedMenu(activeItemId)}
        activeItemId={selectedMenu}
        cActive={cActive}
        cInactive={cInactive}
        bgHover={bgHover}
      >
        {children}
      </MenuGroup>
    </Box>
  )
}

export const Menus: Story = () => {
  return (
    <Template key='menu' title='Menu'>
      <ConditionBox key='menu-basic' title='Basic Menu'>
        <Box w bg='white30'>
          <MenuDemo>
            <Menu items={menuItems} />
          </MenuDemo>
        </Box>
      </ConditionBox>
      <ConditionBox
        key='menu-custom-hover-color'
        title='Menu with Custom Hover Color'
      >
        <Box w bg='white30'>
          <MenuDemo bgHover='green50'>
            <Menu items={menuItems} />
          </MenuDemo>
        </Box>
      </ConditionBox>
      <ConditionBox
        key='menu-custom-hover-color'
        title='Menu with Custom Hover, Inactive and Active Color'
      >
        <Box w bg='white30'>
          <MenuDemo bgHover='green50' cActive='red90' cInactive='blue50'>
            <Menu items={menuItems} />
          </MenuDemo>
        </Box>
      </ConditionBox>
    </Template>
  )
}
