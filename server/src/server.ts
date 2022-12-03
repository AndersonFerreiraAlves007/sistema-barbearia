import dotenv from "dotenv";
import express from "express";
import cors from "cors";

if(process.env.NODE_ENV !== "production") dotenv.config();

import { SERVER_PORT } from "./utils/constants";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("API barbearia 1.0.0");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server listen in port ${SERVER_PORT}`);
});