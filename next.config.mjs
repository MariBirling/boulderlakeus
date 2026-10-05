/** Static export: `npm run build` writes a plain HTML site to `out/`, hostable anywhere. */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
