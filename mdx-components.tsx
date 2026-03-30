import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // allows you to style your Markdown headers, etc.
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    p: ({ children }) => <p className="text-base leading-7 mb-4">{children}</p>,
    ...components,
  }
}