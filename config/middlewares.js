export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'https://api.cloudinary.com',
            'https://res.cloudinary.com',
            'https://media-library.cloudinary.com',
            'https://upload-widget.cloudinary.com',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://res.cloudinary.com',
            'https://console.cloudinary.com',
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'", // ضروري لبعض السكريبتات الخاصة بـ widget
            'https://upload-widget.cloudinary.com',
            'https://media-library.cloudinary.com',
            'https://console.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com',
            'https://media-library.cloudinary.com',
          ],
          'frame-src': [
            "'self'",
            'https://upload-widget.cloudinary.com',
            'https://media-library.cloudinary.com',
            'https://console.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
