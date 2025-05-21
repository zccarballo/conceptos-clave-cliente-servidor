const express = require("express");
const path = require("path");
const app = express();

//Paxinas
//app.use(express.urlencoded)

//app.use(cors())
app.use(express.urlencoded({extended: true})) //para imprimir datos del form en consola
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso", (req, res) => { //carga en server la app si le doy a enviar en el form
    // console.log(req.body); //imprimir en consola
    if(req.body.nome == 'Zoe' && req.body.email == 'yo@gmail.com'){
    res.sendFile(path.join(__dirname, "static/views/app.html"));
    }else{
    res.send("<h1>Usuario no autorizado</h1>");
    }
});
app.get("/enviousuario", (req, res) => {
    res.send({usuario:{
        nome:'Zoe'
    }})
}
)
//START SERVER
app.listen(3000, function () { //crea el servidor para navegar en localhost:3000
 console.log("Server running");
});

