'use strict';

// Importar modelo de proyecto
let Proyecto  = require('../models/model_proyecto');

// Importar fs
let fs = require('fs');

// Importar path
let path = require('path');

// Objeto Json Proyecto con sus metodos
const controllerProyecto = {
    // Prueba de Api
    test: (req, res) => {
        return res.status(200).send({
            message: "La api funciona correctamente"
        });
    },
    // Guardar proyecto 
    guardarProyecto: (req, res) => {
        // Iniciamos el objeto de la entidad
        let proyecto = new Proyecto();
        // Ceamos una variable que obtenga la respuesta de body
        let params = req.body;

        /* 
        Creamos una variable para cada atributo de la entidad, asignando el valor que se obtiene
        por parametro de este atribito
        */
        proyecto.nombre = params.nombre;
        proyecto.descripcion = params.descripcion;
        proyecto.categoria = params.categoria;
        proyecto.lenguajes = params.lenguajes;
        proyecto.creacion = params.creacion;
        proyecto.imagen = null;
        // En el objeto creado usamos la funcion save()
        proyecto.save().then((proyecto) => {
            // Si no se obtiene un valor se retornara un mensaje
            if(!proyecto) {
                return res.status(404).send({
                    message: "No se han enviado datos"    
                })
            }
            // Si todo sale correcto enviara los valores obtenidos como un objeto JSON
            return res.status(200).send({
                proyecto: proyecto,
                message: "proyecto guardado correctamente"
            })

        }).catch((err) => {
            return res.status(500).send({
            message: "Error al guardar el proyecto" + err    
            })
        })
    },
    // Obtener todos los proyectos
    obtenerProyectos: (req, res) => {
        //Realizamos una consulta que nos traiga todos los registros
        Proyecto.find({}).exec().then((proyectos) => {
            // Si no existen datos saltará esta condicion retornando el siguiente mensaje
            if(!proyectos) {
                return res.status(404).send({
                    message: "No se han encontrado proyectos"    
                })
            }
            // Si existen proyectos se retornara el array de objetos obtenidos
            return res.status(200).send({
                proyectos
            })
        }).catch((err) => {
            return res.status(500).send({
                message: "Error al obtener los proyectos" + err                
            });
        });
    },
    // Obtener proyecto por id
    obtenerProyectoById: (req, res) => {
        // Almacenamos el id que se recibe por parametro
        let idProyecto = req.params.id;
        // Si el id es nulo se retorna un mensaje informando que ese registro no existe
        if (idProyecto == null){
            return res.status(404).send({
                message: "No se ha encontrado el proyecto"
            });
        }
        //Se realiza la consulta para obtener el registro pasando el id por parametro
        Proyecto.findById(idProyecto).then((proyecto) => {
            // Si el id no retorna un registro se enviara el siguiente mensaje 
            if(!proyecto) {
                return res.status(404).send({
                    message: "No se ha encontrado el proyecto con id:" + idProyecto
                });
            };
            //Si el id retorno un registro se retornara el objeto con la informacion del proyecto
            return res.status(200).send({
                proyecto
            });
        }).catch((err) => {
            return res.status(500).send({
                message: "Ha ocurrido el siguiente error: " + err 
            });
        });
    },
    
    // Actualizar proyecto por id
    actualizarProyectoById: (req, res) => {
        //Se obtiene el id del proyecto por parametro
        let idProyecto = req.params.id;
        //Se obtienen los datos enviados por el body
        let update = req.body;
        //Se valida si el id del proyecto obtenido existe
        if(!idProyecto){
            return res.status(404).send({
                message: "No se ha encontrado el proyecto"
            })
        }
        // En la instancia de la entidad se usa el metodo para encontrar y actualizar, pasando como parametro el id, los datos obtenidos y un objeto
        Proyecto.findByIdAndUpdate(idProyecto, update, {new:true}).then((proyectoUpdated) => {
            //Si funciona correctamente se retornará un mensaje y el nuevo objeto de ese id
            return res.status(200).send({
                message: "El proyecto ha sido actualizado correctamente",
                proyecto: proyectoUpdated 
            })
        }).catch((err) => {
            //Si occure algun error se retornará un mensaje informandolo
            return res.status(500).send({
                message: "Ha ocurrido un error al actualizar el proyecto " + err 
            })
        })
    },
    // Eliminar un proyecto por id
    eliminarProyectoById: (req, res) => {
        // Se obtiene el id del proyecto por parametro
        let idProyecto = req.params.id;
        // Se valida si el id es correcto
        if(!idProyecto){
            return res.status(404).send({
                message: "No se ha encontrado el proyecto"
            })
        }
        // En la instancia de la entidad se usa el metodo para encontrar y eliminar el registro pasando como parametro el id obtenido
        Proyecto.findByIdAndDelete(idProyecto).then((proyecto) => {
            // Si no se encontro el registro se retorna un mensaje
            if(!proyecto){
                return res.status(404).send({
                    message: "No se ha encontrado el proyecto en la base de datos",
                })
            }
            // Si todo sale correcto se retorna un mensaje y el objeto que fue eliminado
            return res.status(200).send({
                messages: "El proyecto ha sido eliminado de la base de datos :)",
                proyecto: proyecto
            });
        }).catch((err) => {
            // Si ocurre un error se retornará un mensaje informadolo
            return res.status(500).send({
                message : "Ha ocurrido un error al querer eliminar el proyecto de la base de datos :( " + err
            })
        });
    },
    // Subir Imagen
    subirImagen: (req, res) => {
        let proyectoId = req.params.id;
        let nombreArchivo = "No hay un archivo cargado";
        if (req.files){
            
            // Obtiene el nombre del archivo
            let filePath = req.files.imagen.path;

            //Separa el nombre del archivo desde el \\ creando un array
            let fileSplit = filePath.split("\\");

            //Guarda el nombre del archivo
            nombreArchivo = fileSplit[2];           

            // Separa el nombre y la extención del archivo creando un array
            let extFile  = nombreArchivo.split("\.");

            //Guarda la extención del archivo
            let fileExt = extFile[1]

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Proyecto.findByIdAndUpdate(proyectoId, {imagen: nombreArchivo}, {new: true}).then((proyectoUpdated) => {
                    
                    if(!proyectoUpdated){
                        return res.status(404).send({
                            message: 'Este documento no existe'
                        })
                    }

                    return res.status(200).send({
                        proyecto: proyectoUpdated
                    })

                }).catch(err => {
                    return res.status(500).send({
                        message: 'Ha ocurrido el siguiente error al subir el archivo: ' + err
                    })
                })
            }
            else {
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({
                        message: "El archivo cargado es invalido"
                    })
                })
            }
        }
        else {
            res.status(200).send({
                message: nombreArchivo
            })
        }
    },
    // Metodo para obtener la direccion de la imagen
    obtenerImagenProyecto: function (req, res){
        var archivo = req.params.imagen;
        var direccionArchivo = './uploads/proyectos/'+archivo;

        fs.exists(direccionArchivo, (exists) => {
            if (exists){
                return res.sendFile(path.resolve(direccionArchivo));
            }
            else{
                return res.status(200).send({
                    message: 'No existe la imagen.'
                })
            }
        })

    },
};

// Exportar el controlador
module.exports = controllerProyecto;

