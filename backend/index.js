const express=require("express");
const app=express();

const cors = require("cors");
const dotenv = require("dotenv");

const mongoose=require("mongoose");
const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoute");


app.use(cors());
dotenv.config();
//Middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log("Method", req.method);
    console.log("Path", req.path);
    next();
});

app.get("/", (req,res,next)=>{
    return res.status(200).json({message: "Home Page"});
})

app.use("/", userRoutes);
app.use("/test", testRoutes);

const PORT = process.env.PORT;

//Database and server connection
mongoose.connect(process.env.mongo_url)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Database connected, server is up and listening on http://localhost:${PORT}`)
    });
})
.catch((err)=>{
    console.log(err);
})