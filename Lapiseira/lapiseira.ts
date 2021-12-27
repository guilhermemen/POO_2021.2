class Grafite{
    calibre: number;
    dureza: string;
    tamanho: number;
    

    constructor(calibre:number, dureza: string, tamanho: number){
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    }

    desgasteFolhas(): void{
        if (this.dureza == "HB") {
            this.tamanho =-1;
            return;
        }

        if (this.dureza == "2B") {
            this.tamanho =-2;
            return;
        }

        if (this.dureza == "4B") {
            this.tamanho =-4;
            return;
        }

        if (this.dureza == "6B") {
            this.tamanho =-6;
            return;
        }
    }

    toString(): String{
        return "calibre: " + this.dureza + "dureza" + this.dureza + "tamanho" + this.tamanho;
     }
 
    
}

class Lapiseira{
    calibre: number;
    grafite: Grafite;

    constructor(calibre: number){
        this.calibre = calibre;
        this.grafite = null;
    }

    inserir(grafite: Grafite){
        if(this.grafite != null){
            console.log("já existe uma grafite aqui dentro");
            return;
        }else if (this.calibre < grafite.calibre) {
            console.log("essa espessura de grafite não entra na lapiseira");
            return;
        }else{
            console.log("insira uma ponta");
            this.grafite = grafite;
        }
    }

    remover(){
        if (this.grafite != null) {
            this.grafite = null;
        }else{
            console.log("não existe grafite")
        }
    }

    write(Folhas: number){
        if (this.grafite != null) {
            console.log("Não há como escrever, pois não tem grafite")
        }else{
            if (this.grafite.tamanho < Folhas) {
                this.grafite.desgasteFolhas();
            }else{
                this.grafite.desgasteFolhas();
                console.log("Foram escritas em todas as folhas")
                return;
            }
        }
    }

    toString(): String{
        return "Calibre: " + this.grafite.calibre + "Dureza: " + this.grafite.dureza + "Tamanho: " + this.grafite.tamanho;
    }
}

let Lapis:Lapiseira = new Lapiseira(0.7);
console.log(Lapiseira.toString());
Lapis.inserir(new Grafite(0.3, "HB", 50));
Lapis.write(3);
console.log(Lapiseira.toString());
Lapis.remover();
console.log(Lapiseira.toString());