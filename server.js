const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

// use
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso", (req, res) => {
    const {nome, email} = req.body;// desesctructura o obxeto de entrada
    console.log(nome, email);
    let condicionUsuarioCorrecto = req.body.nome == 'Israel' && req.body.email == 'israel@israel.com';
    let datoEnviadoCondicionUsuarioCorrecto = {
                resposta:"acesso autorizado",
                usuario:{
                    nome:'Israel'
                }
            }
    let datoEnviadoEnErro = {resposta:"faltan campos ou usuario non rexistrado"}


    if(condicionUsuarioCorrecto){    
        res.send(datoEnviadoCondicionUsuarioCorrecto);
    }else{
        res.send(datoEnviadoEnErro); 
    }
     
});
app.get("/app",(req,res)=>{
    res.sendFile(path.join(__dirname, "static/views/app.html"));
})


//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});