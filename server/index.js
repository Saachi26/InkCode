const express = require("express");
const app = express();
// Create an HTTP server using the Express app
const server = http.createServer(app);
const request = require("request");
// Create a new instance of the Socket.io server by passing the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// Start the server
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
