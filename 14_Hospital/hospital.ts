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

    rmvpaciente(paciente: string): void{
    
      if(!this.pacientes.has(paciente))
      return
      this.pacientes.get(paciente);
      this.pacientes.delete(paciente);
      paciente.rmvMedico(this);

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

    toString(){
        let keys = this.medicos.keys();
        return this.nome + " [" + [...keys].join(", ") + "]"
      }
}

let Mario = new Medico("Mario");
let Raul = new Paciente("Raul")
let Paula = new Paciente("Paula")

Mario.addPaciente(Raul);
Mario.addPaciente(Paula);

console.log(" " + Mario);
console.log(" " + Raul);
console.log(" " + Paula);