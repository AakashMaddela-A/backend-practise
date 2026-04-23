let fs = require("fs");

// fs.writeFile("mycode.text", "This is my data", (err) => {
//     if (err) throw err;
//     console.log("Task done");
// });

// fs.appendFile("myCode.txt", "node form node fsfs", (err) => {
//     if (err) throw err;
//     console.log("file append");
// });

// fs.readFile("city.json", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// }); // encoding data buffer

// let data = fs.readFileSync("city.json", { encoding: "utf-8", flag: "r" });
// console.log(data);

// let data1 = fs.readFileSync("myCode.txt", { encoding: "utf-8", flag: "r" });
// console.log(data1);

// fs.unlink("mycode1.txt", (err) => {
//     if (err) throw err;
//     console.log("file deleted");
// });

fs.rename("mycode.text", "myFile.txt", () => {
    console.log("renamed");
});
