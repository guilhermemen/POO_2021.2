//métodos e/ou classse abstradas são métodos sem corpo
abstract class FormaGeometrica{
    nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
    abstract getArea(): number
}

class Quadrado extends FormaGeometrica{
    protected lado: number;
    
    constructor(lado: number){
        super("Quadrado");
        this.lado = lado; 
    }
    getArea(): number{
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica{
    protected raio: number;

    constructor(raio: number){
        super("Circulo");
        this.raio = raio;
    }
    getArea(): number{
        return Math.PI * this.raio * this.raio;
    }
}

class Retangulo extends FormaGeometrica{
    protected larg: number;
    protected altura: number;

    constructor(larg: number, altura: number){
        super("Retangulo");
        this.larg = larg;
        this.altura = altura;
    }
    getArea(): number{
        return this.larg * this.altura;
    }
}

let formas: FormaGeometrica[] = [];

formas.push(new Quadrado(2));
formas.push(new Retangulo(65,2));
formas.push(new Circulo(12));

for(let forma of formas){
    console.log(forma.nome + ": " + forma.getArea());
}