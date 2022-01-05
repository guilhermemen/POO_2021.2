//métodos e/ou classse abstradas são métodos sem corpo
abstract class FormaGeometrica{
    nome: string = " ";
    constructor(nome: string){
        this.nome = nome;
    }
    abstract getArea(): number{
        return this.lado * this.lado;
    }
}

class Quadrado extends FromaGeometrica(){

}