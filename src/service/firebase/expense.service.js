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
  const data = response?.docs.map((doc) => doc.data());
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
  
  await addDoc(collectionRef, data);
};

export const filteredCollectionByCategory = async (collectionName,category) => {
  const collectionRef = collection(db, collectionName);
  
  const queryData = query(collectionRef, where("category", "==", category))
  const response = await getDocs(queryData);
  const data = response.docs.map(doc => doc.data())  
  
  return data;
}