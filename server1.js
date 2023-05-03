import net from "net";
import inquirer from "inquirer";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(`Client: ${data.toString().trim()}`);
    inquirer
      .prompt({
        type: "input",
        name: "message",
        message: "Server: ",
      })
      .then((answer) => {
        socket.write(`${answer.message}\n`);
      });
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
