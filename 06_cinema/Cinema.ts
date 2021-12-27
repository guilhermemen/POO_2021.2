class cliente{
    id: string;
    fone: string;

    constructor(id: string, fone: string){
        this.id = id;
        this.fone = fone;
    }

    getId(){
        return this.id
    }

    getFone(){
        return this.fone;
    }

    setid(id: string){
        this.id = id;
    }

    setFone(fone: string){
        this.fone = fone;
    }

    toString(): string{
        return "id: " + this.id + " fone: " + this.fone;
    }
}

class sala{
    cadeiras: cliente[];

    constructor(quant:number){
        this.cadeiras = []

        for(let i = 0; i < quant; i++){
            this.cadeiras.push(null);
        }

    }
  
    busca(id: string): number {
        return this.cadeiras.findIndex(x => x != null && x.id == id);
    };

    cancelar(id: string): boolean {
        let verifica = this.busca(id);
        if(verifica == -1){
            this.cadeiras[verifica] ==  null;
            return true;
        }
        console.log("Cliente não está na sala");
        return false;
    }

    reserva(pes: Cliente, cadeira: number): boolean {
        if(cadeira > this.cadeiras.length || cadeira < 0){
            console.log("essa cadeira não existe");
        }if (this.cadeiras[cadeira] != null){
            console.log("Cadeira ocupada");
        }if (this.busca(pes.id) != -1){
            console.log("essa cadeira é sua");
            return false;
        }
        this.cadeiras[cadeira] = pes;
        return true;
    }

    toString(): string{
        let res="[ "
        for(let i = 0; i < this.cadeiras.length; i++) {
            if (this.cadeiras[i] == null) {
                res += " - "
            }else{
                res += this.cadeiras[i].toString() + " ";
            }
        }
        res += " ]";
        return res;
    }
}

let sala1 =  new sala(3);
let cliente1 = new cliente("mário", "1234");
let cliente2 = new cliente("suzana", "3490");
 
sala1.reserva(cliente1,2);
sala1.reserva(cliente2, 1);
sala1.cancelar("Maria");

console.log(sala1.toString());