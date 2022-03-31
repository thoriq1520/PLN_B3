module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c74b1ee78f6731e02dbd2e238372d90e'),
  },
});
