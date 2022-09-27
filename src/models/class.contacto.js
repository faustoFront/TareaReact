export class Contacto {
    name = '';
    apellido = '';
    email = '';
    conectado = false ;
    
    constructor(name , apellido ,conectado, email){
        this.name = name;
        this.apellido = apellido;
        this.conectado = conectado; 
        this.email = email;
    }
    
}