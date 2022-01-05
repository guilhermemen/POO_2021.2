class Animal{

    private alive: boolean = true;
    private type: string = "";

    constructor(private type: string){
        this.type = type;
    }

    isAlive():boolean{
        return this.alive;
    }

    kill():void{
        this.alive = false;
    }

    getType():string{
        return this.type;
    }

    toString():string{
        return this.type + " : " + (this.alive ? "alive" : "dead");
    }

}


function main() {
    let gato =  new Animal("gato");
    console.log(gato.toString());
    gato.kill();
    console.log(gato.toString());
}

main();

class pet extends Animal{

}

class gato extends pet{
     
}