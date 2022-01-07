class Animal{

    protected alive: boolean = true;
    protected tipo: string = "";

    constructor(tipo: string){
        this.tipo = tipo;
    }

    isAlive():boolean{
        return this.alive;
    }

    kill():void{
        console.log("eu morri, me deixe em paz")
        this.alive = false;
    }

    getTipo():string{
        return this.tipo;
    }

    toString():string{
        return this.tipo + ": " + (this.alive ? "alive" : "dead");
    }

}

class Lagarto extends Animal{
   protected nome: string = "";
    constructor(nome: string, tipo:string){
        super(tipo);
        this.nome = nome;
    }

    correr():void{
        if(this.isAlive()){
            console.log(this.nome + " está correndo sem parar");
        }else{
            console.log("correndo no céu agora")
        }
        
    }

    toString(): string{
        return this.nome + ": " + super.toString();
    }
}

class Calango extends Lagarto{
    protected Patas: number = 4;

    constructor(nome: string, Patas: number){
        super(nome, "calango");
        this.Patas = Patas;
    }

    brincar():void{
        if(!this.isAlive()){
            console.log("esse calango morreu")
        }
        if(this.Patas > 3){
            console.log(this.nome + "correndo com dificuldade");
            this.Patas--;
        }else if(this.Patas = 1){
            super.kill();
        }
    }

    toString(): string{
        return super.toString() + ": " + this.Patas;
    }
}

function main(){

    let Odi = new Calango("Odi", 3);
    
    console.log(Odi.toString());
    Odi.correr();
    Odi.kill();
    Odi.correr();
    Odi.brincar();

    console.log(Odi.toString());

    //let milo = new Lagarto("milo", "calango");
    //console.log(milo.toString());

    //let calango = new Animal("calango");
    //console.log(calango.toString());
    //calango.kill();
    //console.log(calango.toString());
}

main();