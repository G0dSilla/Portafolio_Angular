'use strict';

const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const ProyectoSchema = Schema({
    nombre:String,
    descripcion:String,
    categoria:String,
    lenguajes:String,
    creacion:Number,
    imagen:String
});

module.exports = moongoose.model('Proyecto', ProyectoSchema);