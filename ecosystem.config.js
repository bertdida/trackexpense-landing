module.exports = {
  apps: [
    {
      name: 'trackexpense.app',
      script: 'npm ',
      args: 'start',
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
