var io = require("socket.io")(process.env.PORT || 3000);
console.log("Server da khoi dong v2")
// io.on('connection', function (socket) {
// 	socket.on('CO_ID_MOI', function (id) {
// 		console.log("P_id: " + id);
// 		socket.emit("ID_MOI",id);
// 	});
// });
