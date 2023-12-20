import yargs from 'yargs'

import { hideBin } from 'yargs/helpers'
import {
    findNotes,
    getAllNotes,
    newNote,
    removeAllNotes,
    removeNote
} from './notes.js'
import { listNotes } from "./utils.js";
import { start } from "./server.js";

yargs(hideBin(process.argv))
    .command('new <note>', "Create a new note", () => {}, async (argv) => {
        const tags = argv.tags ? argv.tags.split(", ") : [];
        console.log("ARGV:: ", argv);
        const note = await newNote(argv.note, tags)
        console.log("New Note Added: ", argv);
    })
    .option("tags", { // option is a flag
        alias: "t", // shorthand -t
        type: "string",
        description: "tags to add to the note"
    })
    .command('all', 'get all notes', () => {}, async (argv) => {
        const notes = await getAllNotes();
        const formatNotes = listNotes(notes)
        console.log("All Notes:", formatNotes);
    })
    .command('find <filter>', 'get matching notes', yargs => {
      return yargs.positional('filter', {
        describe: 'The search term to filter notes by, will be applied to note.content',
        type: 'string'
      })
    }, async (argv) => {
      const matches = await findNotes(argv.filter);
      const formatNotes = listNotes(matches)
      console.log(`Find ${argv.filter} Notes`, formatNotes);
    })
    .command('remove <id>', 'remove a note by id', yargs => {
      return yargs.positional('id', {
        type: 'number',
        description: 'The id of the note you want to remove'
      })
    }, async (argv) => {
        const note = await removeNote(argv.id);
        console.log(`Delete Note: ${argv.id}`, note);
    })
    .command('web [port]', 'launch website to see notes', yargs => {
      return yargs
        .positional('port', {
          describe: 'port to bind on',
          default: 4000,
          type: 'number'
        })
    }, async (argv) => {
        const notes = await getAllNotes()
        start(notes, argv.port)
    })
    .command('clean', 'remove all notes', () => {}, async (argv) => {
        await removeAllNotes()
        console.log("Cleaned");
    })
    .demandCommand(1)
    .parse()


// > note --help

// https://scottmoss.notion.site/scottmoss/Intro-to-Node-js-V3-7c8e4ccaebf94b839f425fff13dcc44c