import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase.config";
import { AppService } from "./app.service";

/**
 * The service responsible setting up firebase auth configuration and firestore.
 */
export default class FirebaseService {
  static app = initializeApp(firebaseConfig)
  static auth = getAuth(this.app);
  static db = getFirestore(this.app);
  static token = '';

  /**
   * Listens the firebase user auth state.
   *
   * @param callback Callback function that triggers with user auth whenever auth state changes in firebase.
   */
  static currentUserState = (callback) => {
    this.auth.onAuthStateChanged(async (user) => {
      AppService.setLoadingState(true);
      this.token = await user?.getIdToken();
      callback(user)
    },
    (err) => {
      console.error(err)
    })
  }
}
