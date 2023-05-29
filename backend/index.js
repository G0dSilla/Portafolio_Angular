'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const port = 4000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
    .then(() =>{
            console.log('Conectado a la base de datos Portafolio');
            
            // Levantar el servidor
            app.listen(port, () => {
                console.log(`Servidor corriendo en el puerto: `+ port);
                })
            }
        )
    .catch((err) => console.log('Ha ocurrido el siguiente error: ' + err)); 
