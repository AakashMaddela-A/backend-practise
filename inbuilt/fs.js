let fs = require("fs");

fs.writeFile("mycode.text", "This is my data", (err) => {
    if (err) throw err;
    console.log("Task done");
});
