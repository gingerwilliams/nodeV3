Commands

```
Run > note new "Content" -t "Tag1,Tag2"
```

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
    
7. The name db.json is causing write permission issues. rename this anything else.
test


> node-cli@1.0.0 test
> node --experimental-vm-modules node_modules/jest/bin/jest.js

  console.log
    Create New Note |  { tags: [ 'tag1', 'tag2' ], content: 'Test note', id: 1700806427115 }

      at log (src/notes.js:15:13)

(node:17767) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  src/tests/notes.test.js
  ✕ newNote inserts data and returns it (21 ms)

  ● newNote inserts data and returns it

    TypeError: Cannot read properties of undefined (reading 'content')

      27 |
      28 |   const result = await newNote(note, tags);
    > 29 |   expect(result.content).toEqual(data.content);
         |                 ^
      30 | });

      at Object.content (src/tests/notes.test.js:29:17)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.556 s, estimated 1 s
Ran all test suites.
➜  nodeV3 git:(main) ✗ 


```
Server Start
Run > node server.js
```

Interpolate: Turn data to text on a page