import { useEffect, useState } from 'react'
import isEqual from 'react-fast-compare'

export function useDerivedStateFromProp<S>(
  propValue: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [state, setState] = useState(propValue)

  useEffect(() => {
    if (!isEqual(state, propValue)) setState(propValue)
  }, [propValue])

  return [state, setState]
}
