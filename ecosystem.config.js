module.exports = {
  apps: [
    {
      name: 'trackexpense.app',
      cwd: '/var/www/trackexpense.app',
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
