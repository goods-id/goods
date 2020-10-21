import styled from 'styled-components'

export type CheckboxInputStyledProps = React.InputHTMLAttributes<
  HTMLInputElement
>

export const CheckboxInputStyled = styled.input<CheckboxInputStyledProps>({
  top: 0,
  left: 0,
  width: '100%',
  cursor: 'inherit',
  height: '100%',
  margin: 0,
  opacity: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  '&:disabled': {
    filter: 'opacity(35%)',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
})
