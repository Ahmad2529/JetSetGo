import { UserService } from "./user.service";


/**
 * The service responsible for handling app actions.
 */
class AppService {
  static loadingTrigger = (arg) => {};
  static user;

  /**
   * Listen the user authentication state and communicate current user details if logged in.
   *
   * @param callback Callback function that triggers with userDetails if found or undefined otherwise.
   */
  static appInit = (callback) => {
    UserService.currentUserState(async (user) => {
      console.log(user);
      if(user !== null && user.uid) {
        const userDetails = await UserService.getUserByUid(user.uid);
        this.user = userDetails;
        callback(userDetails)
      } else {
        callback(undefined);
      }
    })
  };

  /**
   * Listen the loading state.
   *
   * @param callback Callback function that triggers whenever loading state get set in application.
   */
  static listenLoadingTrigger = (callback) => {
    this.loadingTrigger = callback;
  }
  
  /**
   * Responsible for triggering loading listener.
   *
   * @param state Determine the loading state.
   */
  static setLoadingState = (state) => this.loadingTrigger(state);  
}

export { 
  AppService
};