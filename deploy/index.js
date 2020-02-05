require('dotenv').config();
const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
  try {
    const api = new GhostAdminApi({
      url: process.env.url,
      key: process.env.key,
      version: 'v3'
    });

    await api.themes.upload({file: 'santhoshveer.zip'});
    console.log('Theme successfully uploaded.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}());