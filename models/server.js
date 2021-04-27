const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';
        //MIDDLEWARES
        this.middlewares();

        //RUTAS
        this.routes();

    }
    middlewares(){
        //DIRECTORIO PUBLICO
        //USE es la clave de que se trata de un middleware
        this.app.use( cors());
        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());
        //DIRECTORIO PÚBLICO
        this.app.use( express.static('public'));
    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))

    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Server;