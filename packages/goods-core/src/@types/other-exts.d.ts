declare module '*.woff' {
  declare const url: string
  export default url
}

declare module '*.woff2' {
  declare const url: string
  export default url
}

declare module '*.md' {
  const doc: unknown
  export default doc
}

declare module '*.png' {
  const url: string
  export default url
}

declare module '*.jpg' {
  const url: string
  export default url
}
