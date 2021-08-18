import app from "./server.js"
import express from "express";
const PORT=process.env.port||8000;

app.listen(port,()=>{
    console.log(`listening to port ${PORT}`);
})