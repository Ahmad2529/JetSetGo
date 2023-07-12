import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { FIREBASE_COLLECTION } from "../common/constant";
import { AppService } from "./app.service";
import FirebaseService from "./firebase.service";

const collectionName = FIREBASE_COLLECTION.users;

/**
 * The service responsible for handling user data.
 */
class UserService extends FirebaseService {
  /**
   * Get users data.
   */
  static getUsers = async () => {
    try {
      AppService.setLoadingState(true);
      const users = [];
      const querySnapshot = await getDocs(collection(this.db, collectionName));
      querySnapshot.forEach((doc) => {
        users.push({...doc.data(), docId: doc.id});
      });
      AppService.setLoadingState(false);
      return users;
    } catch (err) {
      console.error(err);
      AppService.setLoadingState(false);
      throw err;
    }
  }
  
  /**
   * Get user by corresponding id.
   *
   * @param uid Represents the id of user.
   *
   * @returns The user if found or undefined otherwise.
   */
  static getUserByUid = async (uid) => {
    try {
      AppService.setLoadingState(true);
      const users = [];
      const userQuery = query(collection(this.db, collectionName), where("uid", "==", uid));
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((doc) => {
        users.push({...doc.data(), docId: doc.id});
      });
      return users.length ? users[0] : undefined;
    }  catch (err) {
      console.error(err);
      AppService.setLoadingState(false);
      throw err;
    }
  }
  
  /**
   * Update user.
   *
   * @param user Represents the information of user to be updated.
   */
  static updateUser = async (user) => {
    try {
      AppService.setLoadingState(true);
      const getUser = doc(this.db, collectionName, user.docId);
      const updatedData = await updateDoc(getUser, {
        name: user.name,
        email: user.email,
        role: user.role,
        isDeleted: user.isDeleted
      })
  
      return updatedData;
    } catch (err) {
      console.error(err);
      AppService.setLoadingState(false);
      throw err;
    }
  }

  static addUser = async (user) => {
    try {
      AppService.setLoadingState(true);
      const newUser = await addDoc(collection(this.db, collectionName), user)
      return newUser;
    } catch (err) {
      console.error(err);
      AppService.setLoadingState(false);
      throw err;
    }
  }
}



export {
  UserService
};