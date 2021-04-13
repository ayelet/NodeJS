const yargs = require("yargs");
const calc = require("./calc");

yargs.version("1.1.0");

// const add = (a, b) => {
//   console.log("adding 2 numbers");
//   console.log(a + b);
// };
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const pow = (a) => Math.pow(2, a);

// console.log(yargs.argv);

// console.log(`${action} of  ${a} , ${b}: ${result}`);

// yargs.command({
//   command: "calc",
//   describe: "add 2 numbers",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log("Title: " + argv.title);
//     console.log("Body: " + argv.body);
//   },
// });

// The add command can now be used with --title and --body.
// $ node app.js add --title="Buy" --body="Note body here"
// Title: Buy
// Body: Note body here

// * node calc –add 1 2 // returns 3
