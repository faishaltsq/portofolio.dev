/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true"
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "faishaltsq-dev"
const basePath = isGithubActions && !hasCustomDomain ? `/${repoName}` : ""
const assetPrefix = isGithubActions && !hasCustomDomain ? `/${repoName}/` : ""

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
}
   
module.exports = nextConfig
