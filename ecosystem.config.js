module.exports = {
  apps: [
    {
      name: 'vigot',
      script: './node_modules/.bin/next',
      args: 'start --port 3000 --hostname 0.0.0.0',
      cwd: '/home/ubuntu/vigot',
      interpreter: '/home/ubuntu/.hermes/node/bin/node',
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      restart_delay: 3000,
    },
  ],
};
