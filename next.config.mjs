import { withSentryConfig } from '@sentry/nextjs';
import createMDX from '@next/mdx';
import toc from '@atomictech/rehype-toc';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import langPython from 'highlight.js/lib/languages/python';
import langSwift from 'highlight.js/lib/languages/swift';
import langGo from 'highlight.js/lib/languages/go';
import langRust from 'highlight.js/lib/languages/rust';
import langTypescript from 'highlight.js/lib/languages/typescript';
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          languages: {
            python: langPython,
            swift: langSwift,
            go: langGo,
            typescript: langTypescript,
          },
        },
      ],
      [rehypeSlug],
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [toc, { headings: ['h2', 'h3'], placeholder: 'TOCHERE' }],
    ],
  },
});

// Merge MDX config with Next.js config
export default withSentryConfig(
  withMDX(nextConfig),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'jacob-maizel',
    project: 'personal-site',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
);
