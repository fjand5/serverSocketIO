var io = require("socket.io")(process.env.PORT || 3000);
console.log("Server da khoi dong v5")
io.on('connection', function (socket) {
  console.log("co nguoi ket noi: " + socket.id);
  socket.emit("YOUR_ID",socket.id);

});
  io.on('StreamAV',Str =>{
  console.log(Str);
});
