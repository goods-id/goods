import React from 'react'
import { Box, BoxProps, Icon, Text } from '@pomona/goods-core'
import { IconButtonProps } from '../@types/global'

type AlertVariant = 'info' | 'error' | 'warning' | 'success'

export interface AlertProps extends BoxProps {
  isOpen?: boolean
  title?: string
  message?: string
  /**
   * @default "info"
   */
  variant?: AlertVariant
  closeIcon?: true | IconButtonProps | React.ReactNode
  duration?: number
  onClose?(e: React.MouseEvent): void | Promise<void>
}

function getDefaultProps(variant: AlertVariant): Pick<BoxProps, 'bg' | 'bC'> {
  switch (variant) {
    case 'error':
      return {}
    default:
      return {}
  }
}
