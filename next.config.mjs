// Static export for GitHub Pages. BASE_PATH is set by the deploy workflow
// (e.g. "/my-house-listing" for project pages, empty for a custom domain).
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
