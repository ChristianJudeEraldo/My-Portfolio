import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Add any other Next.js config here
};

const withMDX = createMDX({
  // Add markdown plugins here if you want (e.g., remark-gfm)
});

// Wrap your config with the MDX plugin
export default withMDX(nextConfig);