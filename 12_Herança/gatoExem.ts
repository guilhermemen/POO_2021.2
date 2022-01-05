class Animal{

    alive: boolean = true;

    constructor(public type: string){
        this.type = type;
    }

    isAlive():boolean{
        return this.alive;
    }

    kill(){
        console.log("matando" + this.type)
        this.alive = false;
    }

    getType():string{
        return this.type;
    }

    toString():string{
        return this.type + " : " + (this.alive ? "alive" : "dead");
    }

}

class pet extends Animal{
    nome: string;
    constructor(nome: string, type:string){
        super(type);
        this.nome = nome;
    }

    brincar(){
        if(this.isAlive()){
            console.log("brincando com " + this.nome)
        }else{
            console.log("me enterra logo")
        }
        
    }

    toString():string{
        return this.nome + ": " + super.toString();
    }
}

class cat extends pet{
     protected life: number;

     constructor(nome: string, life: number){
         super(nome, "gato");
         this.life = life; 
     }

     brincar(){
         if(this.isAlive()){
             console.log("brancando com " + this.nome);
         }else {
             console.log("espero ter uma vida nova na proxima")
         }
     }

     kill(){
         if(!this.isAlive()){
             console.log("esse gato partiu dessa pra melhor")
         }else if(this.life > 1){
             console.log("perdeu uma vida")
             this.life--;
         }else{
            this.life--;
            super.kill();
         }
     }

     toString():string{
         return super.toString() + ": " + this.life;
     }
}


function main() {
    let Odi = new cat("Odi", 2);
    console.log(Odi.toString());
    Odi.brincar();
    Odi.kill();
    Odi.kill();
    Odi.kill();
    Odi.kill();
    Odi.kill();
    Odi.kill();
    Odi.brincar();
    console.log(Odi.toString()); 


    //let gato =  new Animal("gato");
    //console.log(gato.toString());
    //gato.kill();
    //console.log(gato.toString());
}

main();