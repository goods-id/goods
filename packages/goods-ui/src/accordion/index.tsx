import * as React from 'react'
import { useCallback } from 'react'
import { Box, Text, BoxProps, IconProps } from '@pomona/goods-core'

import { useAccordionContext } from './accordion.context'

export interface AccordionProps extends BoxProps {
  title?: string
  index: number
  children?: React.ReactNode
  headerProps?: BoxProps
  containerProps?: BoxProps
}

export const Accordion: React.NamedExoticComponent<AccordionProps> = React.memo<
  AccordionProps
>(
  React.forwardRef(
    (
      { title, children, index, containerProps, headerProps, ...props },
      ref
    ) => {
      const {
        openedIndex,
        onClickAccordion,
        cOpened,
        cClosed,
        bgOpened,
        bgClosed,
        prefixComponent: PrefixComponent,
        suffixComponent: SuffixComponent,
      } = useAccordionContext()
      const isOpen = openedIndex === index
      const titleBarColor = isOpen ? cOpened : cClosed

      const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
          onClickAccordion(Number(e.currentTarget.dataset?.index))
        },
        [openedIndex]
      )

      return (
        <Box
          posi='relative'
          w='100%'
          overflow='hidden'
          bg={isOpen ? bgOpened : bgClosed}
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
            overflow='hidden'
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
