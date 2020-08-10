function position(item, array = []) {
  const index = array.indexOf(item)
  // Show unsorted items at the bottom.
  return index === -1 ? 10000 : index
}

export function splitStoryName(name = '') {
  return name.split('/')
}

export function sortStories(sortOrder) {
  const groups = Object.keys(sortOrder)

  return (a, b) => {
    const aKind = a[1].kind
    const bKind = b[1].kind

    // Preserve story sort order.
    if (aKind === bKind) {
      return 0
    }

    const [aGroup, ...aComponents] = splitStoryName(aKind)
    const [bGroup, ...bComponents] = splitStoryName(bKind)

    const aComponent = aComponents.join('/')
    const bComponent = bComponents.join('/')

    // Sort stories in a group.
    if (aGroup === bGroup) {
      const group = sortOrder[aGroup]

      return position(aComponent, group) - position(bComponent, group)
    }

    // Sort groups.
    return position(aGroup, groups) - position(bGroup, groups)
  }
}
