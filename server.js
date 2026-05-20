import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server)

app.use(express.static("public"))

io.on("connection", (socket) => {

    console.log("User is Connected:", socket.id)

})


server.listen(8500, () => {
    console.log("server is listening on port", 8500)
})