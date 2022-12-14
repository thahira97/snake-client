const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: MTS");
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

console.log("Connecting...");
connect();

module.exports = "connect";
