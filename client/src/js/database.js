// Referencing Module 19 activities

import { openDB } from 'idb';

const initdb = async () =>
// We are creating a new database named 'jate' which will be using version 1 of the database.
  openDB('jate', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
    console.log('PUT to the database');

    // Create a connection to the database database and version we want to use.
    const jateDb = await openDB('jate', 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction('jate', 'readwrite');

    // Open up the desired object store.
    const store = tx.objectStore('jate');

    // Use the .put() method to update data in the database.
    const request = store.put({ jate: content });

    // Get confirmation of the request.
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

export const getDb = async () => {
    console.log('GET from the database');

    // Create a connection to the database database and version we want to use.
    const jateDb = await openDB('jate', 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = jateDb.transaction('jate', 'readonly');

    // Open up the desired object store.
    const store = tx.objectStore('jate');

    // Use the .getAll() method to get all data in the database.
    const request = store.getAll();

    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
};

initdb();
