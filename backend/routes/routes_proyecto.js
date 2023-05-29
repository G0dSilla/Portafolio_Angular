'use strict';

// Importaciones
const express = require('express');

// Importacion controladores proyecto
const proyectoController = require('../controllers/controller_proyecto');

// Importar metodos de Router()
const router = express.Router();

// Middlewares para subida de imagenes
const connectMultiparty = require('connect-multiparty');
const multipartyMiddleware = connectMultiparty({uploadDir: './uploads/proyectos'});  

// Rutas para metodos del controlador
router.post('/test', proyectoController.test);
router.post('/guardarProyecto', proyectoController.guardarProyecto);
router.get('/obtenerProyectos', proyectoController.obtenerProyectos);
router.get('/obtenerProyectoById/:id?', proyectoController.obtenerProyectoById);
router.put('/actualizarProyectoById/:id?', proyectoController.actualizarProyectoById);
router.delete('/eliminarProyectoById/:id?', proyectoController.eliminarProyectoById);
router.post('/subirImagen/:id', multipartyMiddleware, proyectoController.subirImagen);
router.get('/obtenerImagenProyecto/:imagen', proyectoController.obtenerImagenProyecto);

// Exportar router para luego ser configurado
module.exports = router;