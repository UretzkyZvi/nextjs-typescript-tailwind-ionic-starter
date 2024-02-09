/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    transpilePackages: ['@ionic/react', '@ionic/core',  'ionicons'],
    distDir: 'build',
    output:'export',
};

export default nextConfig;
