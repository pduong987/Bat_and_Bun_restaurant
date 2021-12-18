import dotenv from 'dotenv';
dotenv.config();
import admin from 'firebase-admin';

admin.initializeApp(
  {
    credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS))
  }
);

export {
  admin
};
