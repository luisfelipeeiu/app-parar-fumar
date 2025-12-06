/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de produção
  reactStrictMode: true,
  swcMinify: true,
  
  // Compressão e otimização
  compress: true,
  
  // PWA e produção
  output: 'standalone',
  
  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
  
  // Configurações de build
  poweredByHeader: false,
  generateEtags: true,
  
  // Experimental features para performance
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
