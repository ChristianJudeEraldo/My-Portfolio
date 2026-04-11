import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-5 mt-8 text-[40px] font-[510] leading-[1.04] tracking-[-0.04em] md:text-[56px]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-[24px] font-[510] tracking-[-0.018em]">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-4 text-[15px] leading-relaxed linear-muted">{children}</p>,
    ul: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-5 text-[15px] linear-muted">{children}</ul>,
    li: ({ children }) => <li>{children}</li>,
    hr: () => <hr className="my-8 border-(--border-subtle)" />,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l border-(--accent)/80 pl-4 text-[15px] linear-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-[rgba(255,255,255,0.04)] px-1.5 py-0.5 text-[13px] text-(--foreground)">
        {children}
      </code>
    ),
    ...components,
  }
}