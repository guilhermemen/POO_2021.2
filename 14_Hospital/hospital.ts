class Medico{

    protected nome: string;
    protected pacientes: Map<string, Paciente>;
    protected especialidade: string;

    constructor(nome: string, especialidade: string){
        this.nome = nome;
        this.pacientes = new Map<string, Paciente>();
        this.especialidade = especialidade
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
    protected enfermidade: string;

    constructor(nome: string, enfermidade: string){
        this.nome = nome;
        this.medicos = new Map<string, Medico>();
        this.enfermidade = enfermidade;
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
        let pacientes = [...this.pacientes.values()].map(p => p.toString());
        let medico = [...this.medicos.values()].map(m => m.toString());
            return "Pacientes:\n " + pacientes.join("\n") + 
        "\n Medicos:\n " + medico.join("\n");
        
    }
}

let hos = new hospital();

hos.addPaciente(new Paciente("Terry", "braço quebrado"));
hos.addPaciente(new Paciente("Vinicius","pele irritada"));
hos.addPaciente(new Paciente("Clara", "gastrite"));
hos.addPaciente(new Paciente("Emilli", "errupções na pele"));

hos.addMedico(new Medico("Dr.Marcus", "ortopedista"));
hos.addMedico(new Medico("Dr.Priscila", "dermatologista"));
hos.addMedico(new Medico("Dr.Fabiana", "dermatologista"));

hos.vincular("Terry", "Dr.Marcus");
hos.vincular("Vinicius","Dr.Fabiana");
hos.vincular("Clara","Dr.Fabiana");
hos.vincular("Emilli","Dr.Priscila");

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