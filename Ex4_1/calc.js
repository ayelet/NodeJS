const yargs = require("yargs");
const argv = require("yargs").argv;

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "subtract 2 numbers",

  handler(argv) {
    return console.log(argv._[1] + argv._[2]);
  },
});

yargs.command({
  command: "mult",
  describe: "multiply 2 numbers",

  handler(argv) {
    return console.log(argv._[1] * argv._[2]);
  },
});

yargs.command({
  command: "sub",
  describe: "add 2 numbers",

  handler(argv) {
    return console.log(argv._[1] - argv._[2]);
  },
});

yargs.command({
  command: "pow",
  describe: "power of numbers",

  handler(argv) {
    return console.log(Math.pow(argv._[1], argv._[2]));
  },
});

yargs.parse();
