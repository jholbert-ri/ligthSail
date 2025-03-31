module.exports = {
  apps: [
    {
      name: "lightsail-app",
      script: "./app.js",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
