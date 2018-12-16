import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MapaRotaPage} from '../mapa-rota/mapa-rota'
import { Unidade } from '../../models/unidade';
import { LatLng, Spherical } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-form-busca',
  templateUrl: 'form-busca.html',
})
export class FormBuscaPage {
  locUnidades: Array<Unidade> = [];
  userLoc: LatLng;
  raio: number;
  transporte: string;
  unidades: Array<Unidade> = [];
  diaSemana : number;
  horario : number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.locUnidades = navParams.get('locUnidades');
    this.userLoc = navParams.get('userLoc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormBuscaPage');
  }

  buscar():void{
    let date = new Date();
    let diaSemana = date.getDay();
    let horario = date.getHours();
    console.log(date);
    console.log(horario);
    console.log(diaSemana);

    let unidadesRaio: Array<Unidade> = [];
    //Verifica unidades dentro do raio estipulado
    let raio = 0;
    raio = this.raio;
    raio = raio * 1000;
    this.locUnidades.forEach( unidade =>{
      let uniLatLng = new LatLng(unidade.latitude,unidade.longitude);
      let distance = Spherical.computeDistanceBetween(this.userLoc, uniLatLng);
      console.log(distance);
      if (distance <=raio){
        unidadesRaio.push(unidade);
        console.log("Unidade dentro do raio");
      }
    });
    console.log("saiu do 1o for")
    this.verificaDiaHorario(unidadesRaio).then( (unidadesValidas : Array<Unidade>) =>{
      console.log("validou e vai mostrar rota");
      if (unidadesValidas.length == 0){
        let alert = this.alertCtrl.create({
          title: 'Não foi possível definir um unidade',
          subTitle: 'Tente de novo com um raio de busca maior!',
          buttons: ['OK']
        });
        alert.present();
      }else{
        this.navCtrl.push(MapaRotaPage, {
          unidades: unidadesValidas,
          userLoc : this.userLoc,
          transporte : this.transporte
        });
      }
    });

  }


  verificaDiaHorario(unidadesRaio: Array<Unidade>){
    //Verifica se unidade atende aquele dia e horário
    var unidadesValidas : Array<Unidade> = [];
    console.log("vai entrar no 2o for");
    return new Promise((resolve) =>{
    unidadesRaio.forEach( unidade =>{
      console.log("entrou no 2o for");

      if(((unidade.terca == false) &&(this.diaSemana==2)) ||
        ((unidade.quarta == false) &&(this.diaSemana==3)) ||
        (( unidade.segunda == false)&&(this.diaSemana ==1)) ||
        ((unidade.quinta == false) &&(this.diaSemana==4)) ||
        ((unidade.sexta == false) &&(this.diaSemana==5)) ||
        ((unidade.sabado == false) &&(this.diaSemana==6)) ||
        ((unidade.domingo == false) &&(this.diaSemana==7))
      ){
        console.log("Não atende neste dia");
      }else{
        if ((unidade.inicioAtendimento == 0) && (unidade.fimAtendimento == 0)){
          unidadesValidas.push(unidade);
          console.log("validou unidade" +unidade.nome);
        } else{
          if ((this.horario>= unidade.inicioAtendimento)&&(this.horario <unidade.fimAtendimento)){
            unidadesValidas.push(unidade);
            console.log("validou unidade" +unidade.nome);
          } else{
            console.log("REMOVIDO POR NÃO ESTAR NO HORARIO ACEITAVEL " + unidade.nome);
          }
        }
      }
    });
    resolve(unidadesValidas);
    });
  }

}
