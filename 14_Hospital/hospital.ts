class Medico{

    protected nome: string;
    protected pacientes: Map<string, Paciente>;

    constructor(nome: string){
        this.nome = nome;
        this.pacientes = new Map<string, Paciente>();
    }

    getNome(){
        return this.nome;
    }

    addPaciente(paciente: Paciente): void{
        if(this.pacientes.has(paciente.getNome()))
         return
            this.pacientes.set(paciente.getNome(), paciente)
            paciente.addMedico(this);
        
    }

    rmvpaciente(key: string): void{
    
     // if(!this.pacientes.has(paciente))
     //    return
     //       this.pacientes.get(paciente);
     //       this.pacientes.delete(paciente);
     //       paciente.rmvMedico(this.nome);
        let paciente: Paciente | undefined = this.pacientes.get(key)
            if (paciente !== undefined) {
                this.pacientes.delete(key)
                paciente.rmvMedico(this.nome);
        }
    }

    toString(): string{
        //keys percorre a estrutura e passa por todas as chaves que exsite
      let keys = this.pacientes.keys();
      return this.nome + " [" + [...keys].join(", ") + "]"
    }
}

class Paciente{

    protected nome: string;
    protected medicos: Map<string, Medico>;
    constructor(nome: string){
        this.nome = nome;
        this.medicos = new Map<string, Medico>();
    }

    getNome(){ 
        return this.nome;
    }

    addMedico(medico: Medico): void{
        if(this.medicos.has(medico.getNome()))
            return;
            this.medicos.set(medico.getNome(), medico);
            medico.addPaciente(this);
    }

    rmvMedico(key: string): void{
       let medico: Medico | undefined = this.medicos.get(key);
            if (medico !== undefined) {
                this.medicos.delete(key);
                medico.rmvpaciente(this.nome);
            }
    }

    toString(){
        let keys = this.medicos.keys();
        return this.nome + " [" + [...keys].join(", ") + "]"
      }
}

class hospital{
    private pacientes: Map<string,Paciente>
    private medicos: Map<string, Medico>

    constructor(){
        this.pacientes = new Map<string,Paciente>();
        this.medicos = new Map<string, Medico>();
    }

    addPaciente(paciente: Paciente): void{
        let chave = paciente.getNome();
            if(this.pacientes.has(chave))
                return;
                this.pacientes.set(chave, paciente)
    }

    addMedico(medico: Medico): void{
        let chave = medico.getNome();
            if(this.medicos.has(chave))
                return
                this.medicos.set(chave, medico)
    }

    vincular(nomePaciente: string, nomeMedico: string){
       // let pa: Paciente | undefined = this.pacientes.get(paciente);
       // let me: Medico | undefined = this.medicos.get(medico);

       // if (pa !== undefined && me !== undefined) {
       //     pa.addMedico(me);
       // }

       this.getPaciente(nomePaciente).addMedico(this.getMedico(nomeMedico));
    } 

    desvincular(nomePaciente: string, nomeMedico: string){
        this.getPaciente(nomePaciente).rmvMedico(nomeMedico);
    }

    getPaciente(nome: string){
        let paciente = this.pacientes.get(nome);
        if (paciente === undefined)
            throw new Error("Paciente não existe.");
            return paciente
        
    }

    getMedico(nome: string){
        let medico = this.medicos.get(nome);
        if (medico === undefined)
        throw new Error("Medico não existe.");
        return medico

    }

    toString(): string{
        let pacientes = [...this.pacientes.keys()];
        let medico = [...this.medicos.keys()];
            return "Alunos: [" + pacientes.join(", ") + " ]" + 
        "\nMedicos: [" + medico.join(", ") + "]";
        
    }
}

let hos = new hospital();

hos.addPaciente(new Paciente("Terry"));
hos.addPaciente(new Paciente("Vinicius"));
hos.addPaciente(new Paciente("Clara"));
hos.addPaciente(new Paciente("Emilli"));

hos.addMedico(new Medico("Dr.Marcus"));
hos.addMedico(new Medico("Dr.Priscila"));
hos.addMedico(new Medico("Dr.Fabiana"));

console.log(hos.toString());
//let Mario = new Medico("Dr.Mario");
//let Raul = new Paciente("Raul")
//let Paula = new Paciente("Paula")

//Mario.addPaciente(Raul);
//Mario.addPaciente(Paula);

//console.log(" " + Mario);
//console.log(" " + Raul);
//console.log(" " + Paula);

//Mario.rmvpaciente("Paula")
//Paula.rmvMedico("Dr.Mario ")