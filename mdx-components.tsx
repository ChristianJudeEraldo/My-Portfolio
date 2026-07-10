import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-8 mt-12 font-mono text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-[1.05] max-w-2xl text-(--ink)">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-6 mt-12 text-[17px] font-semibold tracking-tight text-(--ink)">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-6 text-[15px] leading-relaxed text-(--gray-500)">{children}</p>,
    ul: ({ children }) => <ul className="mb-8 list-none space-y-2 text-[15px] text-(--gray-500)">{children}</ul>,
    li: ({ children }) => <li className="flex gap-2 before:content-['—'] before:text-(--gray-400)">{children}</li>,
    hr: () => <hr className="my-10 border-t border-(--gray-200)" />,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l border-(--gray-300) pl-5 text-[17px] font-serif italic leading-relaxed text-(--gray-500)">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded-md border border-(--gray-200) bg-(--background) px-1.5 py-0.5 text-[13px] font-mono text-(--ink)">
        {children}
      </code>
    ),
    ...components,
  }
}