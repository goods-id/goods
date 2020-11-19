import * as React from 'react'
import { useCallback } from 'react'
import { Box, Text, BoxProps, IconProps, Icon } from '@pomona/goods-core'

import { useAccordionContext } from './accordion.context'

interface PrefixSuffixProps {
  c?: IconProps['c']
  isOpen?: boolean
}

const defaultPrefix: AccordionProps['prefixComponent'] = ({ c }) => (
  <Icon name='noteOff' c={c} mr='xs' />
)

const defaultSuffix: AccordionProps['prefixComponent'] = ({ c, isOpen }) => (
  <Icon
    name='chevron'
    c={c}
    rotate={isOpen ? 'right' : 'left'}
    transition='transform 0.6s ease'
  />
)

export interface AccordionProps extends BoxProps {
  title?: string
  index: number
  children?: React.ReactNode
  headerProps?: BoxProps
  containerProps?: BoxProps
  prefixComponent?: React.ComponentType<PrefixSuffixProps>
  suffixComponent?: React.ComponentType<PrefixSuffixProps>
}

export const Accordion: React.NamedExoticComponent<AccordionProps> = React.memo<
  AccordionProps
>(
  React.forwardRef(
    (
      {
        title,
        children,
        index,
        containerProps,
        headerProps,
        prefixComponent: PrefixComponent = defaultPrefix,
        suffixComponent: SuffixComponent = defaultSuffix,
        ...props
      },
      ref
    ) => {
      const {
        activeIndex,
        onClickAccordion,
        cOpen,
        cClose,
        bgOpen,
        bgClose,
      } = useAccordionContext()
      const isOpen = activeIndex === index
      const titleBarColor = isOpen ? cOpen : cClose

      const onClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
          onClickAccordion(Number(event.currentTarget.dataset?.index), event)
        },
        [activeIndex]
      )

      return (
        <Box
          posi='relative'
          w
          overflow='hidden'
          bg={isOpen ? bgOpen : bgClose}
          {...containerProps}
        >
          <Box
            p='xs'
            f={1}
            fDir='row'
            fJustify='space-between'
            onClick={onClick}
            as='button'
            outline='none'
            data-index={index}
            bg='inherit'
            b='none'
            cursor='pointer'
            {...headerProps}
          >
            <Box fDir='row' as='span' fAlign='center'>
              {PrefixComponent && (
                <PrefixComponent
                  c={titleBarColor as IconProps['c']}
                  isOpen={isOpen}
                />
              )}
              <Text
                as='span'
                rule='body'
                c={titleBarColor}
                weight={isOpen ? 'bold' : 'initial'}
              >
                {title}
              </Text>
            </Box>
            {SuffixComponent && (
              <SuffixComponent
                c={titleBarColor as IconProps['c']}
                isOpen={isOpen}
              />
            )}
          </Box>
          <Box
            posi='relative'
            overflow='auto'
            maxH={isOpen ? '100vh' : '0'}
            transition='max-height 0.6s ease'
            ref={ref}
            {...props}
          >
            {children}
          </Box>
        </Box>
      )
    }
  )
)

Accordion.displayName = 'Accordion'
