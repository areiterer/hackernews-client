import rebase from "re-base";
import firebase from "firebase/app";
import database from "firebase/database";

const HN_DATABASE_URL = "https://hacker-news.firebaseio.com";
const HN_VERSION = "v0";

let app = firebase.initializeApp(
  { databaseURL: HN_DATABASE_URL },
  "hackernews"
);
let db = database(app);
let base = rebase.createClass(db);

// Api is a wrapper around base, to include the version child path to the binding automatically.
const Api = {
  /**
 * One way data binding from Firebase to a component's state.
 * @param {string} endpoint 
 * @param {object} options
 * @return {object} An object which you can pass to 'removeBinding' if you want to remove the 
 * listener while the component is still mounted.
 */
  bindToState(endpoint, options) {
    return base.bindToState(`/${HN_VERSION}${endpoint}`, options);
  },

  /**
   * Listens to a Firebase endpoint without binding changes to a state property. Instead a callback
   * will be invoked.
   * 
   * @param {string} endpoint 
   * @param {object} options 
   * @returns 
   */
  listenTo(endpoint, options) {
    return base.listenTo(`/${HN_VERSION}${endpoint}`, options);
  },

  /**
 * Retrieves data from Firebase once without setting up binding
 * @param {string} endpoint 
 * @param {object} options
 * @return {Promise} A Firebase Promise which resolves when the write is complete and rejects 
 * if there is an error. 
 */
  fetch(endpoint, options) {
    return base.fetch(`/${HN_VERSION}${endpoint}`, options);
  }
};

export default Api;
