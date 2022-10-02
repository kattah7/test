import express, { Request, Response, NextFunction } from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.redirect("https://youtu.be/d1YBv2mWll0");
});

// app.get("/chat", (req, res) => {
//   res.render(__dirname + "/views/chat.ejs");
// });

// io.on("connection", (socket) => {
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
// });

server.listen(4000, () => {
  console.log("listening on 4000");
});
