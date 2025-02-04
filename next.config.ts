import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: `
    @use "styles/utility/mixins.scss" as *;
    @use "styles/utility/functions.scss" as *; 
    `,
  },
}

export default nextConfig
