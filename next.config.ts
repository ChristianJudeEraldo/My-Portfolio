import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/skills", destination: "/#skills", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/projects/cnn-thesis", destination: "/#projects-cnn", permanent: false },
      { source: "/projects/todo", destination: "/#projects-todo", permanent: false },
      { source: "/blogs", destination: "/#contact", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here if you want (e.g., remark-gfm)
});

// Wrap your config with the MDX plugin
export default withMDX(nextConfig);