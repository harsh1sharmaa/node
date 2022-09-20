const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app)

const io=require("socket.io")(server,{cross:{original:"*"}});

app.set("view engine", "ejs");


app.get("/home", (req, res) => {
 
    res.render('home');
  });
server.listen(2000);

io.on("connection",(socket) => {

  console.log(socket.id)

  socket.on("message",(data)=>{
      console.log(data);
      socket.broadcast.emit("message",data);
  })
})

