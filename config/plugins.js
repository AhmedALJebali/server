module.exports = ({ env }) => ({
  // إعداد رفع الملفات باستخدام Cloudinary
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', ''),
        api_key: env('CLOUDINARY_KEY', ''),
        api_secret: env('CLOUDINARY_SECRET', ''),
      },
    },
  },

  'cloudinary-media-library': {
    enabled: true,
    config: {
      cloudName: env('CLOUDINARY_NAME', ''),
      apiKey: env('CLOUDINARY_KEY', ''),
      encryptionKey: env('CLOUDINARY_SECRET', ''), // أو مفتاح تشفير خاص لو عندك
    },
  },
});
