import "dotenv/config";
import express from "express";
import http from "http";
import * as loaders from "./loaders"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

http.createServer(app).listen(PORT, () => logger.info(`Server running and listening in port: ${PORT}`));

export default app;
