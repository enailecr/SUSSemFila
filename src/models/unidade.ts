export class Unidade{
  key : string;
  inicioAtendimento: number;
  fimAtendimento: number;
  nome: string;
  tempoAtendimentoManha : number;
  tempoAtendimentoTarde : number;
  tempoAtendimentoNoite : number;
  latitude : number;
  longitude : number;
  segunda : boolean;
  terca : boolean;
  quarta : boolean;
  quinta : boolean;
  sexta : boolean;
  sabado : boolean;
  domingo : boolean;

  constructor(){

  }

  getLatitude(){
    return this.latitude;
  }

  getLongitude(){
    return this.longitude;
  }
}
