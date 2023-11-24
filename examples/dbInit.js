import fs from "node:fs/promises";
import { json } from "stream/consumers";
const DB_PATH = new URL("../db.json", import.meta.url).pathname;

export const getDB = async () => {
    // read the file parse then give it back
    const db = await fs.readFile(DB_PATH, "utf-8")
    const parsedDB = JSON.parse(db)
    console.log(parsedDB);
    return parsedDB;
}

// take in a db object, turn it into json, then save to the database
export const saveDB = async (db) => {
    // turn it into json string
    const dbJsonStr =  JSON.stringify(db, null, 4); // space it out by 2 spaces
    // then save to the database
    await fs.writeFile(DB_PATH, dbJsonStr);
    return db;
}

// how to appending to db
// turn this json into javascript
// push into the array
// turn back into json 
// then save

export const updateDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
}