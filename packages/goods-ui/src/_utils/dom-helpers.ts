export function isDocumentElement(element: HTMLElement): boolean {
  return [document.documentElement, document.body, window].indexOf(element) > -1
}

export function scrollTo(element: HTMLElement, top: number): void {
  if (isDocumentElement(element)) {
    window.scrollTo(0, top)
    return
  }

  element.scrollTop = top
}

export function scrollIntoView(parent: HTMLElement, child: HTMLElement): void {
  const parentRect = parent.getBoundingClientRect()
  const childRect = child.getBoundingClientRect()
  const oneThirdChildHeight = child.offsetHeight / 3
  const childOffsetTop = child.offsetTop

  const needToScrollDown =
    childRect.bottom + oneThirdChildHeight > parentRect.bottom

  if (needToScrollDown) {
    const scrollTop = Math.min(
      childOffsetTop +
        child.clientHeight -
        parent.offsetHeight +
        oneThirdChildHeight,
      parent.scrollHeight
    )
    scrollTo(parent, scrollTop)
    return
  }

  const needToScrollUp = childRect.top - oneThirdChildHeight < parentRect.top
  if (needToScrollUp) {
    const scrollTop = Math.max(childOffsetTop - oneThirdChildHeight, 0)
    scrollTo(parent, scrollTop)
  }
}

export function handleMouseDown(e: React.MouseEvent): void {
  e.preventDefault()
  e.stopPropagation()
}
