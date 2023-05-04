import net from "net";
import inquirer from "inquirer";


const client = new net.Socket();

inquirer
  .prompt(
    {
    type: "input",
    name: "name",
    message: "Enter your name: ",

    },
    
  )
  .then((answer) => {
    client.connect(8080, "localhost", () => {
      console.log("Connected to server");
      client.write(`${answer.name}\n`);
      // );
      // console.log(answer.name, "hlw");
    // });
  // });

  inquirer
  .prompt(
    {
    type: "input",
    name: "msg",
    message: "Enter your msg: ",

    },
    
  )
  .then((answer) => {
    client.connect(8080, "localhost", () => {
      console.log("Connected to server");
      client.write(`${answer.msg}\n` + `${answer.msg}\n`);
      // console.log(answer.name, "hlw");
    });
  });
   });
  });
 
 

client.on("data", (data) => {
  console.log(`Server: ${data.toString().trim()}`);

  client.end();
});

// client.on("close", () => {
//   console.log("Connection closed");
// });
