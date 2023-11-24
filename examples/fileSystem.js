import fs from "node:fs/promises";

const read = async () => {
    // const path = new URL("../package.json", import.meta.url).pathname;
    const path = new URL("../fileSystem.json", import.meta.url).pathname;
    const parsedFile = JSON.parse(await fs.readFile(path, "utf-8"));
    console.log(parsedFile);
    return parsedFile
}

read();

const write = async () => {
    const path = new URL("../fileSystem.json", import.meta.url).pathname;
    await fs.writeFile(path, `{ "notes": ["test 2"]}`);
}

write();

const update = async () => {
    const db = read();
    await fs.writeFile(path, `{ "notes": ["test 2"]}`);
}

// write();

// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html