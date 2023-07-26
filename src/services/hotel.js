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

const collectionName = FIREBASE_COLLECTION.hotels;

const HOTEL_TYPES = {
  LUXURY: 'LUXURY',
  BUDGET: 'BUDGET',
  MOTEL: 'MOTEL'
}

/**
 * The service responsible for handling user data.
 */
class HotelService extends FirebaseService {
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

  static add = async (hotel) => {
    try {
      AppService.setLoadingState(true);
      const newUser = await addDoc(collection(this.db, collectionName), {
        name: 'Holday Inn',
        rating: 5,
        type: HOTEL_TYPES.LUXURY,
        description: 'A hotel is a commercial establishment that provides lodging, meals, and other services to guests, travelers, and tourists. Hotels can range from small family-run businesses to large international chains. Most hotels list a variety of services, such as room service, laundry, and concierge',
        image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        moreImage: [],
        location: 'Toronto',
        category: 'luxury',
        deluxeRooms: {
          id: 'DELUXE_ROOM',
          total: 2,
          unitPrice: 200
        },
        premiumRooms: {
          id: 'PREMIUM_ROOM',
          total: 3,
          unitPrice: 150
        },
        standardRooms: {
          id: 'STANDARD_ROOM',
          total: 5,
          unitPrice: 100
        },
        amenities: [
          'Pool',
          'Parking',
          'Wifi',
          'Restaurant',
          'Hot Tub',
          'Breakfast',
        ]
      })
      return newUser;
    } catch (err) {
      console.error(err);
      AppService.setLoadingState(false);
      throw err;
    }
  }
}



export {
  HotelService
};