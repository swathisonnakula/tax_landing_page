import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: {
  //   buildActivity: false
  // }
  devIndicators: {
    buildActivity: true,
    // buildActivityPosition: "bottom-right"
  },

};

export default nextConfig;



// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* your existing config options */
//   devIndicators: {
//     buildActivity: false,
//     buildActivityPosition: "bottom-right"
//   },
//   // Also disable other development indicators
//   experimental: {
//     devIndicators: {
//       buildActivityPosition: "bottom-right",
//       buildActivity: false
//     }
//   }
// };

// export default nextConfig;