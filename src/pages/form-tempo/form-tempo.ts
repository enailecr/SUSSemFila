import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MapaPage} from '../mapa/mapa'
import { Observable } from 'rxjs/Observable';
import { UnidadesProvider } from '../../providers/unidades/unidades';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-form-tempo',
  templateUrl: 'form-tempo.html',
})
export class FormTempoPage {
  unidades: Observable<any>;
  unidadeForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private provider: UnidadesProvider, fb: FormBuilder, private alertCtrl: AlertController) {
    this.unidades = this.provider.getAll();
    this.unidadeForm = fb.group({
    unidade: ['', Validators.compose([Validators.required])],
    tempoAtendimento: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormTempoPage');
  }

  cadastrar():void{
    let data = this.unidadeForm.value;

		if ((!data.unidade) || (!data.tempoAtendimento)) {
			return;
		}
    var hora: number = parseFloat(data.tempoAtendimento.substr(0, 2));
    var minuto: number = parseFloat(data.tempoAtendimento.substr(3, 2));

    var segundosTotal :number = 0;
    var segundosHora : number = hora* 60 * 60;
    var segundosMinuto : number = minuto *60;
    segundosTotal = segundosHora + segundosMinuto;
    console.log(segundosTotal);
    console.log(' hora: '   + segundosHora);
    console.log(' minuto: '   + segundosMinuto);

    let date = new Date();
    let horario = date.getHours();
    console.log(horario);

    let tempoAtd : number = 0;
    let mediaTempo : number = 0;
    if ((horario>=6) &&(horario<12)){
      tempoAtd = parseFloat(data.unidade.tempoAtendimentoManha);
      mediaTempo = (tempoAtd+segundosTotal)/2;
      this.provider.saveManha(data.unidade, mediaTempo);
    }else{
      if ((horario>=12) &&(horario<18)){
        tempoAtd = parseFloat(data.unidade.tempoAtendimentoTarde);
        mediaTempo = (tempoAtd+segundosTotal)/2;
        this.provider.saveTarde(data.unidade, mediaTempo);
      }else{
        tempoAtd = parseFloat(data.unidade.tempoAtendimentoNoite);
        mediaTempo = (tempoAtd+segundosTotal)/2;
        this.provider.saveNoite(data.unidade, mediaTempo);
      }
    }
    let alert = this.alertCtrl.create({
      title: 'Obrigado pela contribuição!',
      subTitle: 'Para essa plataforma funcionar corretamente, sua contribuição é essencial!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(MapaPage);
  }

}
