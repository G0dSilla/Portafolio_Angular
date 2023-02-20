export class Proyecto{
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public categoria: string,
        public creacion: number,
        public lenguajes: string,
        public imagen: string
    ){

    }
}