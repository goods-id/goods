import { useEffect, useRef, useState } from 'react'

interface InfiniteScrollHookProps<T extends HTMLElement> {
  scrollTargetRef?: React.RefObject<T>
  scrollTargetSelector?: string
  /**
   * @default () => Promise.resolve([])
   */
  fetchMore?(): Promise<unknown[]>
}

interface InfiniteScrollHookReturn<T extends HTMLElement = HTMLElement> {
  isLoading: boolean
  scrollTargetRef: React.RefObject<T>
}

function getTargetElement<T extends HTMLElement>(
  selector: string,
  parent?: HTMLElement | null
): T | null {
  try {
    const elementFromDoc = document.querySelector(selector) as T
    if (parent) {
      return parent.querySelector(selector) || elementFromDoc
    }
    return elementFromDoc
  } catch {
    return null
  }
}

export function useInfiniteScroll<T extends HTMLElement = HTMLDivElement>({
  scrollTargetRef,
  scrollTargetSelector,
  fetchMore = () => Promise.resolve([]),
}: InfiniteScrollHookProps<T> = {}): InfiniteScrollHookReturn<T> {
  const ref = useRef<T>(null)
  const [isLoading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const defaultScrollTarget = scrollTargetRef
    ? scrollTargetRef.current
    : ref.current

  useEffect(() => {
    const target =
      (scrollTargetSelector &&
        getTargetElement<T>(scrollTargetSelector, defaultScrollTarget)) ||
      defaultScrollTarget

    function handler() {
      if (target) {
        const { scrollTop, clientHeight, scrollHeight } = target
        const isBottom = scrollTop + clientHeight >= scrollHeight
        if (isBottom && hasMore) {
          setLoading(true)
          fetchMore()
            .then(result => {
              setHasMore(Array.isArray(result) && result.length > 0)
            })
            .finally(() => {
              setLoading(false)
            })
        }
      }
    }

    if (target) {
      try {
        target.addEventListener('scroll', handler, {
          capture: false,
          passive: true,
        })
      } catch {
        target.addEventListener('scroll', handler, false)
      }
      target.addEventListener('load', handler)
    }

    return () => {
      if (target) {
        target.removeEventListener('scroll', handler)
        target.removeEventListener('load', handler)
      }
    }
  }, [hasMore, scrollTargetSelector, fetchMore])

  return { isLoading, scrollTargetRef: scrollTargetRef || ref }
}
