import express from "express";

const app = express();

let port = 5000;

//setting
app.set("port", port || 3000);

export default app;
