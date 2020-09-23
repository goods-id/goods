import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const loading = keyframes`
  0%, 25% {
    stroke-dashoffset: 260;
    transform: rotate(0);
  }

  50%, 75% {
    stroke-dashoffset: 80;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 260;
    transform: rotate(360deg);
  }
  }
`

const Spinners = styled.svg`
  animation: 1.6s linear infinite ${rotate};
  max-width: 100px;
  circle {
    animation: 1.4s ease-in-out infinite ${loading};
    display: block;
    fill: transparent;
    stroke: ${({ color }) => color || 'white'};
    stroke-linecap: round;
    stroke-dasharray: 290;
    stroke-dashoffset: 280;
    stroke-width: 6px;
    transform-origin: 50% 50%;
  }
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Spinner = ({ color }) => (
  <Spinners
    width='24px'
    height='24px'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    color={color}
  >
    <circle cx='50' cy='50' r='40' />
  </Spinners>
)

export default Spinner
