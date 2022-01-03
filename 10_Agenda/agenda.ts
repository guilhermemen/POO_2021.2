class Fone{
    id: string;
    number: string;

    constructor(id: string, number: string){
        this.id = id;
        this.number = number;
    }

   public validate(number: string): boolean {
        let permit: string[] = ["0","1","2","3","4","5",
        "6","7","8","9","(",")","."];
        for(let i of number){
            if(!permit.includes(i)){
                return false;
            }
        }
        return true;
    }
    getId(){
        return this.id;
    }
    setId(id: string){
         this.id = id;
    }

    getNumber(){
        return this.number;
    }
    setNumber(number: string){
        this.number = number;
    }
}

class Contato{
    nome: string
    fones: Fone[];
    prefix: string = '-'

    constructor(nome: string, fones: Fone[]){
        this.nome = nome;
        this.fones = fones;
    }

    add(fone: Fone){
        if(Fone.validate(fone.getNumber()) == true){
            this.fones.push(fone);
        }else{
            console.log("número invalido, tente novamente");
        }
    }

    remove(index: number){
        this.fones.splice(index,1);
    }

    getNome(){
        return this.nome;
    }
    setNome(nome: string){
        this.nome = nome;
    }

    getFone(){
        return this.fones
    }

    setFone(fone: Fone){
        for(let i = 0 ; i < this.fones.length; i++){
            this.add(this.fones[i])
        }
    }

    public toString() {
        let result =  this.prefix + " " + this.nome + " ";
        for(let i in this.fones){
            result += ("[" + i + ":" + this.fones[i].getId() 
            + ":" + this.fones[i].getNumber)
        }
        return result;
    }
}

class agenda{
    contatos: Array<Contato>

    constructor(){
        this.contatos = new Array<Contato>();
    }

    FindByName(nome: string): number{
        for(let i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].getNome() == nome){
                return i;
            }
        }
        return -1;
    }

    FindCont(nome: string){
        let contato = this.FindByName(nome);
        if(contato != 1){
            return this.contatos[contato];
        }else{
            return null;
        }
    }

    addCont(contato:Contato){
        let ok = this.FindByName(contato.getNome());
        if (ok == null) {
            this.contatos.push(contato);
            this.contatos.sort((z,x) => z.getNome().localeCompare(x.getNome()))
        }else{
            ok.setFone(contato.getFone());
        }
    }
    rmCont(contato:Contato){
        let Pos = this.FindByName(contato.getNome());
        if (Pos >- 1){ 
            this.contatos.splice(Pos, 1);
            this.contatos.sort((z,x) => z.getNome().localeCompare(x.getNome()));
        }
        console.log("este contato foi excluído com sucesso")
    }

    getContato(nome: string){
        let a = this.FindByName(nome);
        if (a != -1){
            return this.contatos[a];
        }else{
            return null;
        }
    }

    toString(){
        return this.contatos.join()
    }

}

let fones = new Fone("claro", "2234")
let mario = new Contato('Mário', [])
mario.add(new Fone("vivo", "4566"));
mario.remove(3);

agenda.add(mario);
console.log("" + agenda)