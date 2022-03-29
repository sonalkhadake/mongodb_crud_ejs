const express = require("express");
const router = express.Router();
const User= require("../models/users")

router.post("/add", (req, res) => {
    const body = req.body;
  
    const user = new User({
      name: body.name,
      email: body.email,
      phone: body.phone,
    
      
    });
  user.save().then(() => {
   console.log(req.body);
    res.redirect("/")
    })
      
  });
  // to render the home page
  router.get("/", (req, res) => {
    User.find().then((data) => {
      res.render("index", { data: data, title:'home page' });
    });
  });

  // edit user page
  router.get("/edit/:id",(req, res)=>{
    const id= req.params.id;
    User.findById(id,(err,data)=>{
      if(err){
        res.redirect("/")
      }else{
        if(data==null){
          res.redirect("/")
        }else{
          res.render("edit_users", {title:'edit_user', data:data})
        }
      }
    });
  });

///updating the data
  router.post("/update/:uid?",(req,res)=>{  
    const id=req.params.uid;
    const body=req.body;

    User.updateOne({_id:id},{$set:{ 
       name: body.name,
      email: body.email,
      phone: body.phone,
    }}).then(()=>{
      console.log(req.body)
        res.redirect("/")
    }).catch(err=>{
        res.json({message:"Error",data:err})
    })
})
// delete the user
router.get("/delete/:id",(req,res)=>{
const id=req.params.id;
 User.deleteOne({_id:id}).then(()=>{
  res.redirect("/")
}).catch(err=>{
  res.json({message:"error"})
})
})

//to render add_user page

router.get("/add", (req, res)=>{
    res.render("add_users", {title:"add users"})
})


module.exports =router