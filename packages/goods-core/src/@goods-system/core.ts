export const merge = (
  a: Record<string, unknown>,
  b: Record<string, unknown>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  let result = { ...a, ...b }
  Object.keys(a).forEach(key => {
    if (a[key] && typeof b[key] === 'object') {
      result = Object.assign(result, { [key]: Object.assign(a[key], b[key]) })
    }
  })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sort = (obj: Record<string, unknown>): any => {
  const next = {}
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      })
    )
    .forEach(key => {
      next[key] = obj[key]
    })
  return next
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const isNumber = (n): boolean =>
  typeof n === 'number' && !Number.isNaN(n)
