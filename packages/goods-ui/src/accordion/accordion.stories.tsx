import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, BoxProps, Icon, Text } from '@pomona/goods-core'
import { Accordion, AccordionProps } from './accordion'
import { AccordionGroup } from './accordion-group'
import { MenuGroup, Menu, MenuListItem } from '../menu'
import { ConditionBox, Template } from '../_utils/storybook'

const storyMetaData: Meta = {
  title: 'Component/Accordion',
  component: AccordionGroup,
  subcomponents: { Accordion },
}

const menuItems: MenuListItem[] = [
  { title: 'Sub Item #1', itemId: '1', target: '_blank' },
  { title: 'Sub Item #2', itemId: '2' },
  { title: 'Sub Item #3', itemId: '3' },
]

const menuItems2: MenuListItem[] = [
  { title: 'Sub Item #4', itemId: '4' },
  { title: 'Sub Item #5', itemId: '5' },
  { title: 'Sub Item #6', itemId: '6' },
]
const menuItems3: MenuListItem[] = [
  { title: 'Sub Item #7', itemId: '7' },
  { title: 'Sub Item #8', itemId: '8' },
  { title: 'Sub Item #9', itemId: '9' },
]
export default storyMetaData

interface AccordionDemoProps {
  children?: React.ReactNode
  cOpen?: BoxProps['c']
  cClose?: BoxProps['c']
}

const AccordionDemo = ({ children, cOpen, cClose }: AccordionDemoProps) => {
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined)

  return (
    <Box w bg='white30'>
      <AccordionGroup
        cOpen={cOpen}
        cClose={cClose}
        activeIndex={openIndex}
        onClickAccordion={idx => {
          const idxValue = openIndex === idx ? undefined : idx
          setOpenIndex(idxValue)
        }}
      >
        {children}
      </AccordionGroup>
    </Box>
  )
}

const MenuAccordionDemo = ({ children, cOpen, cClose }: AccordionDemoProps) => {
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>('')
  const [openIndex, setOpenIndex] = useState<number | undefined>(undefined)

  return (
    <Box w bg='white30'>
      <MenuGroup
        onClickMenu={activeItemId => setSelectedMenu(activeItemId)}
        activeItemId={selectedMenu}
      >
        <AccordionGroup
          cOpen={cOpen}
          cClose={cClose}
          activeIndex={openIndex}
          onClickAccordion={idx => {
            const idxValue = openIndex === idx ? undefined : idx
            setOpenIndex(idxValue)
          }}
        >
          {children}
        </AccordionGroup>
      </MenuGroup>
    </Box>
  )
}

const customPrefix: AccordionProps['prefixComponent'] = ({ c }) => (
  <Icon name='pomona' c={c} mr='xs' />
)
const customSuffix: AccordionProps['prefixComponent'] = ({ c, isOpen }) => (
  <Icon name={isOpen ? 'minus' : 'plus'} c={c} transition='all 0.6s ease' />
)

export const Accordions: Story = () => {
  return (
    <Template key='accordion' title='Accordion'>
      <ConditionBox key='accordion-menu' title='Accordion With Menu'>
        <Box w bg='white30'>
          <MenuAccordionDemo>
            <Accordion index={0} title='Menu'>
              <Menu items={menuItems} />
            </Accordion>
          </MenuAccordionDemo>
        </Box>
      </ConditionBox>
      <ConditionBox
        key='accordion-custom-content'
        title='Accordion With Custom Content'
      >
        <Box w bg='white30'>
          <AccordionDemo>
            <Accordion index={0} title='Custom Content'>
              <Box p='s'>
                <Text>Hello World</Text>
              </Box>
            </Accordion>
          </AccordionDemo>
        </Box>
      </ConditionBox>
      <ConditionBox
        key='accordion-custom-suffix-prefix'
        title='Accordion With Custom Prefix and Suffix'
      >
        <Box w bg='white30'>
          <AccordionDemo>
            <Accordion
              index={0}
              title='Custom Prefix and Suffix'
              prefixComponent={customPrefix}
              suffixComponent={customSuffix}
            >
              <Box p='s'>
                <Text>Hello World</Text>
              </Box>
            </Accordion>
          </AccordionDemo>
        </Box>
      </ConditionBox>
      <ConditionBox
        key='accordion-custom-color'
        title='Accordion With Custom Color'
      >
        <Box w bg='white30'>
          <AccordionDemo cOpen='orange90' cClose='blue50'>
            <Accordion
              prefixComponent={customPrefix}
              suffixComponent={customSuffix}
              index={0}
              title='Custom Color'
            >
              <Box p='s'>
                <Text>Hello World</Text>
              </Box>
            </Accordion>
          </AccordionDemo>
        </Box>
      </ConditionBox>
      <ConditionBox
        key='accordion-multi-menu'
        title='Multi Accordion with Menu'
        h='max-content'
      >
        <Box w bg='white30'>
          <MenuAccordionDemo>
            <Accordion index={0} title='Heading 1'>
              <Menu items={menuItems2} />
            </Accordion>
            <Accordion index={1} title='Heading 2'>
              <Menu items={menuItems3} />
            </Accordion>
          </MenuAccordionDemo>
        </Box>
      </ConditionBox>
    </Template>
  )
}
