const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  rewrites: [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "test-pages.meetin.homes"
        },
      ],
      destination: "/test-pages/:path*"
    }
  ]
});
