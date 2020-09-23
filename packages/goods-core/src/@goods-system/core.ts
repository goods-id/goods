/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const merge = (a: any, b: any): any => {
  let result = { ...a, ...b }
  Object.keys(a).forEach(key => {
    if (a[key] && typeof b[key] === 'object') {
      result = Object.assign(result, { [key]: Object.assign(a[key], b[key]) })
    }
  })
  return result
}

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

export const isNumber = (n): boolean =>
  typeof n === 'number' && !Number.isNaN(n)
