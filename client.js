const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MTS");
  });
  conn.on("data", (data) => {
    console.log("Server:", data);
  });

  return conn;
};
module.exports = { connect };
