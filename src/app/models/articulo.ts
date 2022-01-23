
export class Articulo{
    constructor(
        //Todos estos valores se le pasaran desde la base de datos en mongdb
        //Al venir de mongo la variable id viene con _
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ){}
}



/**
    title: String,
    content: String,
    //Almacenamos los tipos de construccion, y para el date le decimos
    //que es de tipo date, y que guarde la fecha actual
    date: {type: Date, default: Date.now},
    image: String,  //string para la ruta de la imagen
    */