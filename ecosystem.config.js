module.exports = {
  apps: [
    {
      name: 'vigot',
      script: '/home/ubuntu/.local/bin/npx',
      args: 'serve /home/ubuntu/vigot/dist -l 3000 --no-clipboard',
      cwd: '/home/ubuntu/vigot',
      interpreter: 'none',
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
