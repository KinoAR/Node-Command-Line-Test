#!/usr/bin/env node
var system = require("fs");
var args = process.argv.slice(2);
system.writeFileSync(args[0] + ".txt", args[1]);
console.log("Output file at: " + __dirname);