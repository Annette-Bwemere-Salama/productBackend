import http from "http"
import express from "express"
import dotenv from "dotenv"

dotenv.config()


const app = express()
const server = http.createServer(app);

server.listen(7000)