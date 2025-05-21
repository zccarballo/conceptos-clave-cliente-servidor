const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

// use
//app.use(cors());
app.use(express.urlencoded({extended: true}))
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso", (req, res) => {
    const {nome, email} = req.body;// desesctructura o obxeto de entrada
    console.log(nome, email);
    if(req.body.nome == 'Zoe' && req.body.email == 'yo@gmail.com'){
        res.sendFile(path.join(__dirname, "/static/views/app.html"));
    }else{
        res.send("<h1>Usuario no autorizado</h1>"); 
    }
     
});
app.get("/enviousuario", (req, res) => {
    res.send({usuario:{
        nome:'Zoe'
    }})
})
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});
