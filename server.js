import app from "./app/app.js";
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.port || 3000

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})