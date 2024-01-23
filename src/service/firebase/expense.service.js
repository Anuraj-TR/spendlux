/* eslint-disable no-undef */
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../main/firebase";

/**
 * Retrieves data from a Firestore collection.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @returns {Promise<Array>} - A promise that resolves to an array of documents in the collection.
 */
export const getCollectionData = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const response = await getDocs(collectionRef);
  const data = response?.docs.map((doc) => ({...doc.data(),id:doc.id}));
  return data;
};

/**
 * Adds data to a Firestore collection.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {Object} data - The data to be added to the collection.
 * @returns {Promise<void>} - A promise that resolves when the data is successfully added.
 */
export const addCollectionData = async (collectionName, data) => {
  const collectionRef = collection(db, collectionName);
  
  return await addDoc(collectionRef, data);
};

/**
 * Retrieves user-specific data from a Firestore collection based on the userId.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} userId - The unique identifier of the user.
 * @returns {Promise<Array>} - A promise that resolves to an array of documents matching the userId in the collection.
 */

export const getUserCollectionData = async (collectionName, userId) => {
  const collectionRef = collection(db, collectionName);
  const queryData = query(collectionRef, where("userId", "==", userId));
  const response = await getDocs(queryData);
  const data = response?.docs.map((doc) => doc.data());
  return data;
};

/**
 * Retrieves data from a Firestore collection filtered by a specific category.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} category - The category to filter the collection by.
 * @returns {Promise<Array>} - A promise that resolves to an array of documents matching the category in the collection.
 */

export const filteredCollectionByCategory = async (collectionName,category) => {
  const collectionRef = collection(db, collectionName);
  
  const queryData = query(collectionRef, where("category", "==", category))
  const response = await getDocs(queryData);
  const data = response.docs.map(doc => doc.data())  
  
  return data;
}

/**
 * Queries a Firestore collection based on specified parameters.
 *
 * @param {string} collectionName - The name of the Firestore collection to query.
 * @param {string} userId - The user ID to filter the collection by.
 * @param {number} month - The month to filter the collection by.
 * @param {number} year - The year to filter the collection by.
 *
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of objects representing the documents in the queried collection.
 * Each object includes the document data along with an 'id' property representing the document ID.
 */

export const queryCollection = async (collectionName, userId, month, year) => {
  const collectionRef = collection(db, collectionName);
  const queryData = query(
    collectionRef,
    where("userId", "==", userId),
    where("month", "==", month),
    where("year", "==", year)
  );
  const response = await getDocs(queryData);
  const data = response?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
};


/**
 * Updates a Firestore document in a specified collection.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} documentName - The name of the Firestore document to be updated.
 * @param {Object} data - The data to be updated in the document.
 * @returns {Promise<void>} - A promise that resolves when the document is successfully updated.
 */
export const updateFirebaseDocument = async (collectionName, documentName, data) => {
  const collectionRef = doc(db, collectionName, documentName);

  await updateDoc(collectionRef, data);
};