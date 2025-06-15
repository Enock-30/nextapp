/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        
      },
    ],
    dangerouslyAllowSVG:true 
    }
};

export default nextConfig;
