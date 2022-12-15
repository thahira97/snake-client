let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // To say message
  // to move
  if (key == "w") {
    connection.write("Say: I am going up");
    connection.write("Move: up");
  }
  if (key == "a") {
    connection.write("Say: On your left,Captain!");
    connection.write("Move: left");
  }
  if (key == "s") {
    connection.write("Say: down,down,down !");
    connection.write("Move: down");
  }
  if (key == "d") {
    connection.write("Say: Always Right!");
    connection.write("Move: right");
  }
  if (key == "o") {
    connection.write("Say: On your mark!");
  }
  if (key == "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
