import React, { memo, useState } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Icon, Text } from 'goods-core'
import { Modal, FeedbackProvider } from './index'
import { Button } from '../button'
import { openFeedback } from './modal-feedback'
import { ConditionBox, Template } from '../_utils/storybook'
import { Input } from '../input'

export default {
  title: 'Component/Modal',
  component: Modal,
}

const SingleActionModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Button w='fit-content' px='l' onClick={openModal}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen}>
        <Modal.Header
          title='This is Modal Title'
          onClose={closeModal}
          closeIcon={false}
        />
        <Modal.Body>
          <Text rule='body' c='black40'>
            This is modal content and it can be either one, two, or three lines
            long. You can use this as confirmatory modals.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            w={{ xs: '100%', lg: 'fit-content' }}
            px='m'
            onClick={closeModal}
          >
            Action
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const MultipleActionModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Button w='fit-content' px='l' onClick={openModal}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen}>
        <Modal.Header
          title='This is Modal Title'
          onClose={closeModal}
          closeIcon
          prefix={<Icon name='pomona' />}
        />
        <Modal.Body>
          <Text rule='body' c='black40'>
            This is modal content and it can be either one, two, or three lines
            long. You can use this as confirmatory modals.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            w={{ xs: '100%', lg: 'fit-content' }}
            px='m'
            mr='xxs'
            b='1px solid'
            bC='black20'
            bg='white10'
            c='black30'
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            w={{ xs: '100%', lg: 'fit-content' }}
            px='m'
            ml='xxs'
            onClick={closeModal}
          >
            Action
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const LargeModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Button w='fit-content' px='l' onClick={openModal}>
        Open Modal
      </Button>
      <Modal w={{ xs: '100%', lg: '970px' }} isOpen={isOpen}>
        <Modal.Header
          title='Alasan Pengembalian Struk'
          onClose={closeModal}
          closeIcon
        />
        <Modal.Body>
          <Text rule='body' c='black40' mb='s'>
            Silahkan masukkan alasan dan / atau kesalahan yang terdapat pada
            proses verifikasi di gate sebelumnya
          </Text>
          <Input
            as='textarea'
            resize='none'
            placeholder='Masukkan alasan'
            type='Text'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            w={{ xs: '100%', lg: 'fit-content' }}
            px='m'
            mr='xxs'
            b='1px solid'
            bC='black20'
            bg='white10'
            c='black30'
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            w={{ xs: '100%', lg: 'fit-content' }}
            px='m'
            ml='xxs'
            onClick={closeModal}
          >
            Action
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const FeedbackModal = () => {
  const onButtonClick = () => {
    openFeedback({
      title: 'Hapus Data Ini?',
      body: `
        <p>Apakah Anda ingin menghapus special campaign “Nescafe Ngopi Santuy 2021”?</p>
      `,
      prefix: {
        icName: 'rejected',
        icColor: 'red60',
      },
      actions: [
        {
          text: 'Batalkan',
          bg: 'white10',
          b: '1px solid',
          bC: 'black10',
          c: 'black30',
          w: 'fit-content',
          px: 'm',
          mr: { xs: 'xxxs', lg: 'xxs' },
          onClick: ({ closeFeedback }) => {
            closeFeedback()
          },
        },
        {
          text: 'Ya, hapus',
          w: 'fit-content',
          bg: 'red60',
          px: 'm',
          ml: { xs: 'xxxs', lg: 'xxs' },
          onClick: ({ closeFeedback }) => {
            closeFeedback()
          },
        },
      ],
    })
  }

  return (
    <Button w='fit-content' px='l' onClick={onButtonClick}>
      Open Modal
    </Button>
  )
}

const BasicModalContent = memo(() => {
  return (
    <Template key='modal' title='Modal'>
      <ConditionBox key='single-action-modal' title='Single Action Modal'>
        <SingleActionModal />
      </ConditionBox>
      <ConditionBox key='multiple-action-modal' title='Multiple Action Modal'>
        <MultipleActionModal />
      </ConditionBox>
      <ConditionBox key='large-modal' title='Large Modal'>
        <LargeModal />
      </ConditionBox>
      <ConditionBox key='large-modal' title='Feedback Modal'>
        <FeedbackModal />
      </ConditionBox>
    </Template>
  )
})

export const BasicModal: Story = () => {
  return (
    <FeedbackProvider>
      <BasicModalContent />
    </FeedbackProvider>
  )
}
