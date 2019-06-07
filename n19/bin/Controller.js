const mongoose = require("mongoose");
const User= require("./models/User");
class Controller{
    constructor(){
        this.connect();
    }
       async connect(){
try{
   await mongoose.connect("mongodb+srv://junior98:19981303jr@cluster0-4vw9h.mongodb.net/n19?retryWrites=true&w=majority",
   {userNewUrlParser:true}
   );
   console.log("conectado a la base de datos")
}catch(e){
    console.error(e)

}
       }

getUsers(res){
    User.find({},(err, users )=>{
        if(err) throw err;       
        res.send(users);
    })
     }
}
    

    
exports.controller=new Controller()