import net from "net";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log(`Client: ${data.toString().trim()}`);
    const name = data.toString().trim();
    //

    socket.write(`${name}`);
    socket.end();
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
