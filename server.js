import http from "http"
import express from "express"
import dotenv from "dotenv"
import path from "path"

const __dirname = path.resolve();
dotenv.config()

const port = process.env.PORT
const app = express()
const server = http.createServer(app);

app.use("/product", (req, res, next) => {
    console.log(`Annette FirstMiddlewere`);
    res.send("<h1>Annette</h1>")
})

app.use('/data', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../API/data', 'data.json'));
    console.log("Anny")
})

server.listen(port, () => {
    console.log(`Serveur listen of ${port}`);
})