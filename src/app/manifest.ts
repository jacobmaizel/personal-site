import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jacob Maizel's Personal Website",
    short_name: 'Jacob Maizel',
    description: 'Blogs, Projects, and more from Jacob Maizel',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
