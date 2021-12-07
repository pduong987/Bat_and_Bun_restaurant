import dotenv from 'dotenv';
dotenv.config();
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase Auth - Client init
initializeApp(JSON.parse(process.env.FIREBASE_CLIENT_CONFIG));

// User Login Auth
const userAuth = async (userDetails) => {
  const auth = getAuth();
  let signInResult = signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
  .then(async (userCredential) => {
    let userIdToken = await auth.currentUser.getIdTokenResult(false);

    return {
      idToken: userIdToken.token,
      refreshToken: userCredential.user.refreshToken,
      email: userCredential.user.email,
      uid: userCredential.user.uid
    };
  })
  .catch(err => {
    console.log(`Internal sign-in function error is:\n${err}`);
    return { error: err };
  });

  return signInResult;
};

// User Login
const userLogin = async (request, response) => {
  let existingUserDetails = {
    email: request.body.email,
    password: request.body.password,
  }

  let signInResult = await userAuth(existingUserDetails);

  if (signInResult.error != null){
    console.log("Sign in failed, returning error to requester");
    response.json(signInResult);
    return;
  }
  
  response.json(signInResult);
}

export {
  userLogin
}
