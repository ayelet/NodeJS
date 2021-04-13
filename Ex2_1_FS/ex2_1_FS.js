const fs = require("fs");

// 1. Create a new txt file using the same fs module method we have
// learned before.
const helloFile = fs.appendFile(
  "hello.txt",
  " This is my text.",
  function (err) {
    if (err) throw err;
    console.log("created!");
  }
);

// 2. Create a copy of the newly created txt file
fs.copyFile("hello.txt", "copied_hello.txt", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
  console.log("File copied!");
});

// 3. Rename one of the files using a method from the fs module.
fs.rename("hello.txt", "hello_renamed.txt", (err) => {
  if (err) {
    console.log("error found");
  }
  console.log("File Renamed!");
});

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
fs.readdir("./", (err, files) => {
  if (err) console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach((file) => {
      console.log(file);
    });
  }
});

// 5. Find out and implement another method for the fs module.
fs.writeFile("hello_renamed.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
