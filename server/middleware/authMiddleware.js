import { admin } from '../config/firebase-config.js';

export const protect = async (req, res, next) => {
  const idToken = await req.headers.authorization.split(' ')[1];

  try {
    admin.auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log(decodedToken);
      
      if (decodedToken) {
        return next();
      }

      return res.json({ message: "Unauthorized" });
    })
    .catch(err => console.log(err));
  } catch (err) {
    console.log(err);
    return res.json({ message: `Internal error: ${err}`});
  }
}
