var io = require("socket.io")(process.env.PORT || 3000);
console.log("Server da khoi dong v5")
io.on('connection', function (socket) {
  console.log("co nguoi ket noi: " + socket.id);
  socket.emit("YOUR_ID",socket.id);
  socket.on('LA_LANG', function (socket) {
  socket.emit("YOUR_ID","tao nghe roi");
});
});

