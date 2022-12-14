const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.100",
    port: 50541,
  });
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MTS");
  });
  // conn.on("connect", ()=> {
  //   conn.write("Move: up");

  // })
  conn.on("data", (data) => {
    console.log("Server:", data);
  });

  return conn;
};
module.exports = { connect };
