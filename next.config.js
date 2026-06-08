/** @type {import('next').NextConfig} */
const repoName = "faishaltsq-portfolio"
const isGithubActions = process.env.GITHUB_ACTIONS === "true"

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
}
   
module.exports = nextConfig
