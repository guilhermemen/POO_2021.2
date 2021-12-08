class sala{
    cadeiras: cliente[];

    sala(){

    }

    reserva(){

    }

    cancelar(){

    }

    toString(): string{
        let res="[ "
        for(Cliente cliente : this.cadeiras){
            if(cliente == null){
                res+= "-"
            }else{
                res+= cliente + " ";
            }
            return res + " ]"
        }
    }

}

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