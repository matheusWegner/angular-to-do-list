export class Tarefa {
    descricao:String;  
    titulo:String; 
    data:String;
    hora:String;
    horaFim:String;
    id:string;
    todoDia:boolean;
    constructor(){
        this.titulo = "";
        this.descricao = "";
        this.data = "";
        this.hora = "";
        this.id = "";
        this.horaFim = "";
        this.todoDia = false;
    }
}