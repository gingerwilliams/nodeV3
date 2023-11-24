#!/usr/bin/env node
import fs from "fs";
import { count } from "./utils.js";

const note = process.argv[2];
const newNote = {
    content: note,
    id: Date.now()
}

console.log(count(7));
console.log(newNote);

// modules
(function(){
    console.log('IIFE')
})()