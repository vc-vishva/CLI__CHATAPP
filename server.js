import net from "net";

const server = net.createServer((socket) => {
  console.log(" connected.");
  //
});

server.listen(8080, () => {
  console.log("Server port 8080.");
});
//
// client.on("data", (data) => {
//   console.log("this is should work");
//   console.log(data.toString());
// });
