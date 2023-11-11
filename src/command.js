import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
    .command('new <note>', "Create a new note", () => {}, (argv) => {
        console.log("sent: ", argv.note);
    })
    .option("tags", { // option is a flag
        alias: "t", // shorthand -t
        type: "string",
        description: "tags to add to the note"
    })
    .command('all', 'get all notes', () => {}, async (argv) => {
    
    })
    .command('find <filter>', 'get matching notes', yargs => {
      return yargs.positional('filter', {
        describe: 'The search term to filter notes by, will be applied to note.content',
        type: 'string'
      })
    }, async (argv) => {
      
    })
    .command('remove <id>', 'remove a note by id', yargs => {
      return yargs.positional('id', {
        type: 'number',
        description: 'The id of the note you want to remove'
      })
    }, async (argv) => {
      
    })
    .command('web [port]', 'launch website to see notes', yargs => {
      return yargs
        .positional('port', {
          describe: 'port to bind on',
          default: 5000,
          type: 'number'
        })
    }, async (argv) => {
      
    })
    .command('clean', 'remove all notes', () => {}, async (argv) => {
      
    })
    .demandCommand(1)
    .parse()


// > note --help

// https://scottmoss.notion.site/scottmoss/Intro-to-Node-js-V3-7c8e4ccaebf94b839f425fff13dcc44c