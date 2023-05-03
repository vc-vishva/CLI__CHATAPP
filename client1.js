import net from "net";
import inquirer from "inquirer";

const client = new net.Socket();

client.connect(8080, "localhost", () => {
  console.log("Connected to server");
  inquirer
    .prompt({
      type: "input",
      name: "message",
      message: "Client: ",
    })
    .then((answer) => {
      client.write(`${answer.message}\n`);
    });
});

client.on("data", (data) => {
  console.log(`Server: ${data.toString().trim()}`);
  inquirer
    .prompt({
      type: "input",
      name: "message",
      message: "Client: ",
    })
    .then((answer) => {
      client.write(`${answer.message}\n`);
    });
});

client.on("close", () => {
  console.log("Connection closed");
});
