import React, {
  memo,
  NamedExoticComponent,
  PropsWithChildren,
  useEffect,
} from 'react'
import { BoxStyledProps } from 'goods-core'
import { useDerivedStateFromProp } from 'goods-helper'
import BasicModal, {
  BasicModalHeader,
  BasicModalBody,
  BasicModalFooter,
  BasicModalProps,
  BasicModalHeaderProps,
} from './_base'

export interface ModalProps extends BasicModalProps {
  isOpen: boolean
}

export interface ModalExoticComponent<P> extends NamedExoticComponent<P> {
  Header: NamedExoticComponent<PropsWithChildren<BasicModalHeaderProps>>
  Body: NamedExoticComponent<PropsWithChildren<BoxStyledProps>>
  Footer: NamedExoticComponent<PropsWithChildren<BoxStyledProps>>
}

export const Modal = memo<ModalProps>(({ isOpen, ...props }) => {
  const [showModal, setShowModal] = useDerivedStateFromProp(false)

  useEffect(() => {
    if (isOpen) {
      setShowModal(true)
    }

    if (!isOpen && showModal) {
      const popup = document.getElementById('goods-modal')
      if (popup) {
        popup.style.animationName = 'zoom-out'
      }
      setTimeout(() => {
        setShowModal(false)
      }, props.closeDelay || 300)
    }
  }, [isOpen])

  return showModal ? <BasicModal id='goods-modal' {...props} /> : null
}) as ModalExoticComponent<ModalProps>

Modal.Header = BasicModalHeader
Modal.Body = BasicModalBody
Modal.Footer = BasicModalFooter
