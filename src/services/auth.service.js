import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AppService } from "./app.service";
import { UserService } from "./user.service";
import FirebaseService from "./firebase.service";

/**
 * The service responsible for user authentication.
 */
class AuthService extends FirebaseService {
  /**
   * Logs in user using email and password.
   *
   * @param payload Holds the login credentials.
   *
   * @returns The corresponding user details if found or undefined otherwise.
   */
  static logInWithEmailAndPassword = async (payload) => {
    try {
      AppService.setLoadingState(true);
      const authUser = await signInWithEmailAndPassword(this.auth, payload.email, payload.password);
      if(authUser) {
        return UserService.getUserByUid(authUser.user.uid);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
      AppService.setLoadingState(false);
    }
  };

  static signup = async (payload) => {
    try {
      AppService.setLoadingState(true);
      const authUser = await createUserWithEmailAndPassword(this.auth, payload.email, payload.password);
      if(authUser) {
        const user = UserService.addUser({...payload, uid: authUser.user.uid});
        console.log(user);
        return UserService.getUserByUid(authUser.user.uid);
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
      AppService.setLoadingState(false);
    }
  };
  
  /**
   * Send the reset password link to the corresponding user email.
   *
   * @param email Represents the email.
   */
  static sendPasswordReset = async (email) => {
    try {
      AppService.setLoadingState(true);
      await sendPasswordResetEmail(this.auth, email);
      AppService.setLoadingState(false);
      return;
    } catch (err) {
      console.error(err);
      alert(err.message);
      AppService.setLoadingState(false);
    }
  };
  
  /**
   * Logs out the current.
   */
  static logout = async () => {
    await signOut(this.auth);
  };
}

export {
  AuthService
};