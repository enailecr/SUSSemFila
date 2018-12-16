import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Unidade } from '../../models/unidade';
import { LatLng } from '@ionic-native/google-maps';
import {} from '@types/googlemaps';

@IonicPage()
@Component({
  selector: 'page-mapa-rota',
  templateUrl: 'mapa-rota.html',
})
export class MapaRotaPage {
  unidades: Array<Unidade> = [];
  userLoc: LatLng;
  mapaError: string;
  bestUnidade : string;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;
  travelMode : string;

  melhorUnidade : Unidade;
  menorDistancia : number = 999999;

  tempoTotal: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: LoadingController) {
    this.unidades = navParams.get('unidades');
    this.userLoc = navParams.get('userLoc');
    this.travelMode = navParams.get('transporte');
  }

  ionViewDidLoad() {

    let loader = this.loading.create({
      content: 'Montando rota...',
    });

  loader.present().then(() => {
    this.initializeMap();
    loader.dismiss();
  });

  }

  initializeMap() {

    const mapOptions = {
      zoom: 18,
      center: this.userLoc,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      position: this.userLoc,
      map: this.map,
      icon: 'blue',
    });

    this.calculateRoute();
  }

  calculateRoute() {
    this.menorDistancia = 999999
    //this.defineTempoRotas();

    let unidades = this.unidades;
    let userLoc = this.userLoc;
    let travelMode = this.travelMode;
    if(!travelMode){
      travelMode = 'DRIVING';
    }
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    let menorDist = this.menorDistancia;
    let melhorUnidade : Unidade;

    var ctr = 0;
  
    for (let i = 0; i < unidades.length; i++) {
        unidades[i];
        let coordUni = new google.maps.LatLng(unidades[i].latitude, unidades[i].longitude);
        const request : any = {
          origin: userLoc,
          destination: coordUni,
          travelMode: travelMode
        };
        let date = new Date();
        let horario = date.getHours();
        let tempoAtendimento : number;
        if ((horario>=6) &&(horario<12)){
          tempoAtendimento = unidades[i].tempoAtendimentoManha;
        }else{
          if ((horario>=12) &&(horario<18)){
            tempoAtendimento = unidades[i].tempoAtendimentoTarde;
          }else{
            tempoAtendimento = unidades[i].tempoAtendimentoNoite;
          }
        }
        console.log("for: pegou o tempo de atendimento " + tempoAtendimento );
        this.defineTempoRota(directionsService, directionsDisplay, tempoAtendimento, unidades[i], request).then( (totalDuration: number) =>{
          console.log("resultado da funcao "+ totalDuration);
          console.log("menor distancia " + menorDist);
          if (totalDuration < menorDist){
            melhorUnidade = unidades[i];
            menorDist = totalDuration;
            console.log("Definiu como Melhor unidade " + melhorUnidade.nome);
          }

          ctr++;
          if (ctr === unidades.length) {
            if(melhorUnidade){
              this.bestUnidade = melhorUnidade.nome;
              this.achouMelhorUnidade(userLoc, travelMode, melhorUnidade, menorDist);
            }else
              this.mapaError = "Não foi possível encontrar uma unidade dentro do raio estipulado. Já tentou aumentar o raio de busca?"
          }
        });

          }

  }

  achouMelhorUnidade(userLoc: any, travelMode : string, melhorUnidade : Unidade, menorDistancia: number){
    let coordMelhorUni = new google.maps.LatLng(melhorUnidade.latitude, melhorUnidade.longitude);
    const request = {
      origin: userLoc,
      destination: coordMelhorUni,
      travelMode: travelMode
    };
    this.traceRoute(this.directionsService, this.directionsDisplay, request, menorDistancia, melhorUnidade);
  }

  async defineTempoRota(service: any, display: any, tempoAtendimento: number, unidade: Unidade,  request: any) {
    return new Promise((resolve) =>{
    service.route(request, function (result, status) {
      if (status == 'OK') {
        //var directionsResult = result.getDirections();
        var route = result.routes[0];
        var duracaoCaminho : number = 0;
        var legs = route.legs;
        for(var i=0; i<legs.length; ++i) {
          duracaoCaminho += legs[i].duration.value;
        }
        var totalDuration : number = 0;
        totalDuration = +duracaoCaminho + +tempoAtendimento;
        console.log("duração caminho " +totalDuration);

      }else{
        console.log("ERRO");

      }
      resolve(totalDuration);
    });
  });
    //return unidade;
  }

  traceRoute(service: any, display: any, request: any, menorDistancia : number, melhorUnidade :Unidade) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
          display.setDirections(result);
      }
    });
    var hora = duas_casas(Math.round(menorDistancia/3600));
    var minuto = duas_casas(Math.floor((menorDistancia%3600)/60));
    var segundo = duas_casas((menorDistancia%3600)%60);

    this.tempoTotal = hora+":"+minuto+":"+segundo;

    function duas_casas(numero){
		    if (numero <= 9){
			   numero = "0"+numero;
        }
		      return numero;
	   }
  }



}
