import express, { Request, Response, NextFunction } from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const links = [
  "https://youtu.be/8ZtW1ziF9u0",
  "https://youtu.be/H4g9l2f7woc",
  "https://youtu.be/zxptc68Mpw4",
  "https://youtu.be/_o2cr1BP-sk",
  "https://youtu.be/TuHmajuKzqk",
  "https://youtu.be/-MPwXWWy-D8",
  "https://youtu.be/bgYNTQMSoxw",
  "https://youtu.be/-ZQTl8oeJkE",
  "https://youtu.be/vTdHBGyH1Q8",
  "https://youtu.be/qeBnFrqbGwE",
];
const ThrowRandomLink = () => {
  const randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
};

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.redirect(ThrowRandomLink());
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
