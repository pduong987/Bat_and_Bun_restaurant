const dotenv = require('dotenv');
dotenv.config();
const admin = require('firebase-admin');

admin.initializeApp(
  {
    credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS))
  }
);

module.exports = {
  admin
};
