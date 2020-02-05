require('dotenv').config()
const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_ADMIN_API_URL,
      key: process.env.GHOST_ADMIN_API_KEY,
      version: 'v3'
    });

    await api.themes.upload({file: '../dist/santhoshveer.zip'});
    console.log('Theme successfully uploaded.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());