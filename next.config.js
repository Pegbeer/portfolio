/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack:(config, { isServer }) => {
    // Agrega una nueva regla para los archivos SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      // Asegúrate de que los archivos SVG se manejen como módulos en el lado del cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
}

module.exports = nextConfig
