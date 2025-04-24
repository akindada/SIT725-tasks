const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 3000;

// Serve all static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Socket.IO events
io.on("connection", (socket) => {
    console.log("A user connected");

    setInterval(() => {
        socket.emit("number", parseInt(Math.random() * 10));
    }, 1000);

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

http.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
