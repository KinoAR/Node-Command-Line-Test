#!/usr/bin/env node
var system = require("fs");
args = process.argv.slice(2);
var text = system.readFileSync(args[0] + ".txt", 'utf8');
console.log(text);