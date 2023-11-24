import fs from "node:fs/promises";
import { json } from "stream/consumers";
const DB_PATH = new URL("../database.json", import.meta.url).pathname;

export const getDB = async () => {
    // read the file parse then give it back
    const db = await fs.readFile(DB_PATH, "utf-8");
    const parsedDB = JSON.parse(db)
    console.log("getDB | ", parsedDB);
    return parsedDB;
}

// take in a db object, turn it into json, then save to the database
export const saveDB = async (db) => {
    // turn it into json string
    const dbJsonStr =  JSON.stringify(db, null, 4); // space it out by 2 spaces
    // then save to the database
    await fs.writeFile(DB_PATH, dbJsonStr);
    // await fs.writeFile(DB_PATH, `{ "notes": ["test 2"]}`);
    return db;
}

// how to appending to db
// turn this json into javascript
// spread into the array
// turn back into json 
// then save

export const updateDB = async (note) => {
    const db = await getDB();
    const { notes } = db;
    
    const newDB = {
        notes: [
            ...notes,
            note
        ]
    };
    await saveDB(newDB);
    console.log("updateDB: ", newDB)
    return note;
}