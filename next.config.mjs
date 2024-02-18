/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  transpilePackages: ["@ionic/react", "@ionic/core", "ionicons"],
  output: "export",
  rewrites: () => {
    return [
      {
        source: "/tabs/:path*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
