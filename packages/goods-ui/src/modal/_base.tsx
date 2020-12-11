import React, { memo, useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import {
  Box,
  BoxProps,
  BoxStyledProps,
  Icon,
  mergeClass,
  Text,
} from 'goods-core'
import { IconButtonProps } from '../@types/global'
import { isIconButtonProps } from '../_utils'

export interface BasicModalHeaderProps extends BoxStyledProps {
  title?: string
  prefix?: IconButtonProps | React.ReactNode
  prefixContainer?: BoxStyledProps
  closeIcon?: boolean
  onClose?(): void | Promise<void>
}

export const BasicModalHeader = memo<BasicModalHeaderProps>(
  ({
    title,
    prefix,
    prefixContainer,
    closeIcon = true,
    onClose,
    children,
    ...props
  }) => {
    return children ? (
      <Box w mb='m' {...props}>
        {children}
      </Box>
    ) : (
      <Box
        w
        fDir='row'
        fJustify={title ? 'space-between' : 'flex-end'}
        fAlign='center'
        mb='m'
        {...props}
      >
        {prefix && (
          <Box as='span' mr='xxs' {...prefixContainer}>
            {isIconButtonProps(prefix) ? (
              <Icon
                name={prefix?.icName}
                c={prefix?.icColor}
                rotate={prefix?.icRotate}
                size={prefix?.icSize}
              />
            ) : (
              prefix
            )}
          </Box>
        )}
        {typeof title === 'string' ? (
          <Box f={1} fAlign='flex-start'>
            <Text
              textAlign='center'
              rule='subtitle'
              lineHeight='20px'
              letterSpace='0px'
              c='black40'
            >
              {title}
            </Text>
          </Box>
        ) : (
          title
        )}
        {closeIcon && (
          <Icon
            d={{ xs: 'none', lg: 'initial' }}
            name='close'
            size='normal'
            c='black20'
            onClick={onClose}
            cursor='pointer'
          />
        )}
      </Box>
    )
  }
)

export const BasicModalBody = memo<BoxProps>(
  ({ children, className, ...props }) => {
    return (
      <Box
        w='100%'
        mb='m'
        overflow='auto'
        className={mergeClass('scroll', className)}
        {...props}
      >
        {children}
      </Box>
    )
  }
)

export const BasicModalFooter = memo<BoxProps>(({ children, ...props }) => {
  return (
    <Box w='100%' fDir='row' fJustify='flex-end' {...props}>
      {children}
    </Box>
  )
})

export interface BasicModalProps extends Omit<BoxProps, 'title'> {
  outsideClick?: boolean
  aNameBeforeClose?: BoxProps['aName']
  closeDelay?: number
  onClose?: (
    e: React.MouseEvent<HTMLDivElement | SVGSVGElement>
  ) => void | Promise<void>
}

const BasicModal = memo<BasicModalProps>(
  ({
    outsideClick = false,
    onClose,
    closeDelay = 300,
    w = '544px',
    maxW = '90%',
    maxH = '70vh',
    overflow = 'auto',
    z = 'modal',
    b = 'none',
    shadow = 'low',
    radius = 'l',
    py = 'm',
    px = 'm',
    bg = 'white10',
    posi = 'static',
    left = 'unset',
    right = 'unset',
    aName = 'zoom-in',
    aDuration = '0.3s',
    aTimingFunction = 'ease-in',
    aNameBeforeClose = 'zoom-out',
    className,
    children,
    ...props
  }) => {
    const [isBeforeClose, setBeforeClose] = useState(false)

    const closeModal = useCallback(
      (e: React.MouseEvent<HTMLDivElement | SVGSVGElement>) => {
        setBeforeClose(true)
        setTimeout(() => {
          if (onClose) {
            onClose(e) as void
          }
        }, closeDelay)
      },
      []
    )

    useEffect(() => {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }, [])

    const component = (
      <Box
        className='goods-modal-container'
        posi='fixed'
        z='backdrop'
        top='0px'
        left='0px'
        w='100vw'
        h='100vh'
        fAlign='center'
        fJustify='center'
        overflow='hidden'
        bg='black40'
        bgAlpha={0.64}
        fDir='row'
      >
        <Box
          className='goods-modal-overlay'
          onClick={outsideClick ? closeModal : undefined}
          posi='absolute'
          top='0px'
          left='0px'
          w='100%'
          h='100%'
        />
        <Box
          as='dialog'
          w={w}
          maxW={maxW}
          maxH={maxH}
          overflow={overflow}
          z={z}
          b={b}
          shadow={shadow}
          radius={radius}
          py={py}
          px={px}
          bg={bg}
          posi={posi}
          left={left}
          right={right}
          aName={(isBeforeClose && aNameBeforeClose) || aName}
          aDuration={aDuration}
          aTimingFunction={aTimingFunction}
          className={mergeClass('scroll goods-modal-dialog', className)}
          {...props}
        >
          {children}
        </Box>
      </Box>
    )

    return createPortal(component, document.body as HTMLElement)
  }
)

export default BasicModal
