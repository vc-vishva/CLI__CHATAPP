// const net = require("net");
import net from "net";
import inquirer from "inquirer";
const client = new net.Socket();
client.connect({ host: "localhost", port: 8080 }, () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "message",
        message: "Enter a message:",
      },
    ])
    .then((answers) => {
      console.log(` msgg- ${answers.message}`);
    });
});
console.log("this is should work 2");
// client.on("data", (data) => {
//   console.log("this is should work");
//   console.log(data.toString());
// });
