require('dotenv').config();
const express= require("express");
const mongoose=require("mongoose");
const PORT= process.env.PORT || 9091
const app = express();

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.set('view engine', 'ejs')
app.use("", require("./routes/routes"))

mongoose.connect("mongodb+srv://sonalikhadake:vobxzoKx0dv7vLlm@cluster0.mfwlz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("connection is success")
}).catch(err=>{
    console.log(err);
})


app.listen(PORT, (req, res)=>{
    console.log("your server is running at port"+PORT)
})