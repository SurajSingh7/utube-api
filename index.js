const express=require("express");
const app=express();
const cors = require("cors");


const {utubeApi}=require("./utube")
const PORT = process.env.PORT || 4000;
require('dotenv').config();
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(express.json());
app.listen(PORT,()=>console.log("liten..."));


app.get("/",(req,res)=>res.send("started......"));

app.get("/api/v1/utube/:id",utubeApi);




