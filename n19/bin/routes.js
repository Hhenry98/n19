const express = require("express");
const app = express();
const {controller}=require("./Controller");

app.get("/",(req, res)=>{
    res.send("Hola mundo!");

})

app.get("/users",(req, res)=>{
    /*let users=[
        {
            name :"pepe", password:"12dd3",
        }]
    res.send(users);*/
    controller.getUsers(res);
})

exports.app=app;
