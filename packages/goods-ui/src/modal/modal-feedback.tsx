import React, {
  createContext,
  useCallback,
  useReducer,
  useMemo,
  useContext,
  memo,
  useEffect,
} from 'react'
import { render } from 'react-dom'
import produce, { Immutable } from 'immer'
import { Box, RichText } from '@pomona/goods-core'
import { Button, ButtonProps } from '../button'
import { Modal } from './modal'
import { BasicModalHeaderProps } from './_base'

export type ActionClickHandler = (args: {
  closeFeedback(): void | Promise<void>
  event: React.MouseEvent
}) => void

interface ActionBtnConfig
  extends Pick<
    ButtonProps,
    'id' | 'w' | 'bg' | 'c' | 'b' | 'bC' | 'ml' | 'mr' | 'px'
  > {
  text: string
  onClick: ActionClickHandler
}

export interface FeedbackPopupState extends BasicModalHeaderProps {
  isOpen: boolean
  body: React.ReactNode
  closeText?: string
  actions?: ActionBtnConfig[]
}

type OpenFeedbackProps = Omit<FeedbackPopupState, 'isOpen'>

type FeedbackPopupAction = {
  type: 'OPEN_FEEDBACK_POPUP' | 'CLOSE_FEEDBACK_POPUP'
  payload?: Partial<FeedbackPopupState>
}

type FeedbackPopupDispatch = {
  openFeedback(args: OpenFeedbackProps): void
  closeFeedback(): void
}

type FeedbackPopupContext = {
  state: Immutable<FeedbackPopupState>
  dispatch: FeedbackPopupDispatch
}

const initialState: FeedbackPopupState = {
  isOpen: false,
  title: '',
  body: '',
  onClose: () => {},
  closeText: 'Close',
}

const reducer = produce(
  (draft: FeedbackPopupState, action: FeedbackPopupAction) => {
    const { type, payload = {} } = action
    switch (type) {
      case 'OPEN_FEEDBACK_POPUP':
        if (draft !== payload && payload.title && payload.body) {
          Object.keys(payload).forEach(key => {
            draft[key] = payload[key]
          })
          draft.isOpen = true
          draft.closeText = payload.closeText || draft.closeText
        }
        return
      case 'CLOSE_FEEDBACK_POPUP':
        // eslint-disable-next-line consistent-return
        return initialState
      default:
        throw new Error('Unknown action type')
    }
  }
)

export const FeedbackPopupStateContext = createContext(
  initialState as Immutable<FeedbackPopupState>
)

export const FeedbackPopupDispatchContext = createContext<
  FeedbackPopupDispatch
>({
  openFeedback: () => {},
  closeFeedback: () => {},
})

let timeout: number

export function useFeedbackPopup(): FeedbackPopupContext {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { onClose: onClosePopup, ...popupProps } = state
  const { closeIcon } = popupProps

  const openFeedback = useCallback(
    ({
      title = '',
      body = '',
      closeText = '',
      onClose = () => {},
      ...rest
    }) => {
      dispatch({
        type: 'OPEN_FEEDBACK_POPUP',
        payload: {
          title,
          body,
          closeText,
          onClose,
          ...rest,
        },
      })
    },
    []
  )

  const closeFeedback = useCallback(async () => {
    async function close() {
      dispatch({
        type: 'CLOSE_FEEDBACK_POPUP',
      })
      if (typeof onClosePopup === 'function') await onClosePopup()
      const containerDomNode = document.querySelector(
        'body > div.goods-feedback-modal'
      )
      if (containerDomNode instanceof HTMLElement) {
        containerDomNode.remove()
      }
    }

    const popup = document.getElementById('feedback-popup')
    if (popup && !closeIcon) {
      popup.style.animationName = 'zoom-out'
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        close().catch(() => {})
      }, 250)
      return
    }

    await close()
  }, [onClosePopup])

  const contextValue = useMemo(
    () => ({
      state: popupProps,
      dispatch: {
        openFeedback,
        closeFeedback,
      },
    }),
    [state]
  )

  return contextValue
}

export interface UseFeedback
  extends Pick<FeedbackPopupState, 'isOpen'>,
    FeedbackPopupDispatch {}

export function useFeedback(): UseFeedback {
  const { isOpen } = useContext(FeedbackPopupStateContext)
  const dispatch = useContext(FeedbackPopupDispatchContext)
  return { isOpen, ...dispatch }
}

export const Feedback = memo(() => {
  const {
    isOpen,
    title,
    prefix,
    prefixContainer,
    body,
    closeText,
    actions,
    closeIcon,
  } = useContext(FeedbackPopupStateContext)

  const { closeFeedback } = useContext(FeedbackPopupDispatchContext)

  const onActionClick = useCallback(
    (onClick: ActionClickHandler) => (event: React.MouseEvent) =>
      onClick({ closeFeedback, event }),
    [closeFeedback]
  )

  return (
    <Modal
      id='feedback-popup'
      key={title}
      isOpen={isOpen}
      onClose={closeFeedback}
      w={{ xs: '288px', lg: '432px' }}
      p='m'
    >
      <Modal.Header
        title={title}
        prefix={prefix}
        prefixContainer={prefixContainer}
        closeIcon={closeIcon}
        onClose={closeFeedback}
      />
      <Modal.Body>
        {typeof body === 'string' ? (
          <RichText w overflow='auto' c='black40' rule='body' text={body} />
        ) : (
          body
        )}
      </Modal.Body>
      <Modal.Footer>
        {Array.isArray(actions) ? (
          <Box w d='flex' fDir='row' fJustify='flex-end'>
            {actions.map(({ text, onClick, ...action }, index) => (
              <Button
                key={index}
                w
                onClick={onActionClick(onClick)}
                {...action}
              >
                {text}
              </Button>
            ))}
          </Box>
        ) : (
          <Button onClick={closeFeedback}>{closeText}</Button>
        )}
      </Modal.Footer>
    </Modal>
  )
})

export const FeedbackProvider = memo(({ children }) => {
  const { state, dispatch } = useFeedbackPopup()
  return (
    <FeedbackPopupDispatchContext.Provider value={dispatch}>
      <FeedbackPopupStateContext.Provider value={state}>
        {children}
        <Feedback />
      </FeedbackPopupStateContext.Provider>
    </FeedbackPopupDispatchContext.Provider>
  )
})

const FeedbackComponentOnly = memo<OpenFeedbackProps>(props => {
  const { state, dispatch } = useFeedbackPopup()

  useEffect(() => {
    dispatch.openFeedback(props)
  }, [])

  return (
    <FeedbackPopupDispatchContext.Provider value={dispatch}>
      <FeedbackPopupStateContext.Provider value={state}>
        <Feedback />
      </FeedbackPopupStateContext.Provider>
    </FeedbackPopupDispatchContext.Provider>
  )
})

export const openFeedback = (props: OpenFeedbackProps): void => {
  const containerDomNode = document.createElement('div')
  containerDomNode.classList.add('goods-feedback-modal')
  document.body.appendChild(containerDomNode)

  return render(<FeedbackComponentOnly {...props} />, containerDomNode)
}
