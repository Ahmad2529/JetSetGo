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

const collectionName = FIREBASE_COLLECTION.bookings;

/**
 * The service responsible for handling user data.
 */
class BookingsService extends FirebaseService {
  /**
   * Get users data.
   */
  static get = async () => {
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
   * Update user.
   *
   * @param user Represents the information of user to be updated.
   */
  static update = async (user) => {
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

  static add = async (booking) => {
    try {
      AppService.setLoadingState(true);
      const newUser = await addDoc(collection(this.db, collectionName), booking)
      return newUser;
    } catch (err) {
      console.error(err);
      AppService.setLoadingState(false);
      throw err;
    }
  }
}



export {
  BookingsService
};