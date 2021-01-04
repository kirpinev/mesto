declare module '*.css' {
  const styles: Record<string, string>
  export = styles
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.woff2' {
  const content: string
  export default content
}
