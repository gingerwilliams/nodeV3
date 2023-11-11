1. Browser vs Node
    -   no window Global instead
2. Node REPL
    - Read, Evaluate, Print, Loop
    - Node CLI
    - inside the terminal type node to initiate, 
    - then write and execute js on commandline
    - to exit type .exit or Cntl+C
3. Creating a CLI
    - Command Lind Interface
    - Process and Environment

"bin": {
    // name of the cli you are creating call this 
    // name in the command line to initialize the app
    "note": "./index.js" 
},

not sending this to node package manager, so just create a local package using symlink

> npm link

> which note
<!-- /Users/gingerwilliams/.nvm/versions/node/v21.1.0/bin/note -->

#!/usr/bin/env node

4. Create a data model for notes
{
    content: note,
    id: Date.now()
}

5. Modules
    - User Created Modules 
    - package.json "type": "module"
    - import { count } from "./utils.js";
    - must use .js

    - Node Internal Modules
    - Third-party Modules node_modules
    - import fx from "fs"

6. Yargs
    - hideBin removes the two url args at the beginning of the array
    - npm is the cli
    - install is the command 
    - curl is the command in this example
    - demandCommand requires at least one command
    - parse mean execute
    - must add a --help in any cli you make
        yargs(hideBin(process.argv))
            .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
                console.info(argv)
            })
            .demandCommand(1)
            .parse()


        - > note curl github.com/gingerwilliams
    
