import http from "http"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT
const app = express()
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Serveur listen of ${port}`);
})