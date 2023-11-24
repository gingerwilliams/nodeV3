import {
    getDB,
    saveDB,
    updateDB
} from "./db.js";

// Create a new Note
export const newNote = async (note, tags) => {
    const newNote = {
        tags,
        content: note,
        id: Date.now(),
    }
    await updateDB(newNote);
    console.log("Create New Note | ", newNote)
}

// search notes

//1. getall
export const getAllNotes = async () => {
    const { notes } = await getDB();
    return notes;
}

//2. search by criteria
export const findNotes = async (criteria) => {
    const { notes } = await getDB();
    const match = notes.filter(note => {
        if (note.tags) {
            return note.tags.includes(criteria)
        }
    });

    return match;
}
// Delete

//2. delete by id
export const removeNote = async (id) => {
    // get all notes
    const { notes } = await getDB();
    // find note by id
    const match = notes.find(note => note.id === id)

    if(match) {
        // filter array of notes by id, returning only the rest
        const restNotes = notes.filter(note => note.id !== id);
        // save the rest to db
        await saveDB({ notes: restNotes })
        return id;
    }
}

//1. delete all
export const removeAllNotes = async () => {
    // todo get number of removed records
    await saveDB({ notes: [] });
}