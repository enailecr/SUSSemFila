import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FormBuscaPage } from '../form-busca/form-busca';
import {FormTempoPage } from '../form-tempo/form-tempo';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  Marker,
  Environment,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { Observable } from 'rxjs/Observable';
import { UnidadesProvider } from '../../providers/unidades/unidades';
import { Unidade } from '../../models/unidade';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})

export class MapaPage {
  @ViewChild('map') mapElement: ElementRef;
  map : GoogleMap;
  unidades: Observable<any>;
  infoUnidades: Array<Unidade> = [];
  myLat: number;
  myLng: number;

  constructor(public navCtrl: NavController, private _geoLoc: Geolocation,
   private provider: UnidadesProvider) {
    this.unidades = this.provider.getAll();
    this.unidades.subscribe(items => {
      items.forEach(item => {
          let unidade = new Unidade();
          unidade.key = item.key;
          unidade.nome = item.nome;
          unidade.latitude = item.latitude;
          unidade.longitude = item.longitude;
          unidade.inicioAtendimento = item.inicioAtendimento;
          unidade.fimAtendimento = item.fimAtendimento;
          unidade.segunda = item.segunda;
          unidade.terca = item.terca;
          unidade.quarta = item.quarta;
          unidade.quinta = item.quinta;
          unidade.sexta = item.sexta;
          unidade.sabado = item.sabado;
          unidade.domingo = item.domingo;
          unidade.tempoAtendimentoManha = item.tempoAtendimentoManha;
          unidade.tempoAtendimentoTarde = item.tempoAtendimentoTarde;
          unidade.tempoAtendimentoNoite = item.tempoAtendimentoNoite;
          this.infoUnidades.push(unidade);
          console.log("ITERACAO INFOUNIDADES " + this.infoUnidades.length);
      });
    });
  }
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAC9-rDXb6OwXbd71W_e-pMBp5_x_aGfr0',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAC9-rDXb6OwXbd71W_e-pMBp5_x_aGfr0'
    });

    this.getLocation().then( res => {
    //Once location is gotten, we set the location on the camera.
       this.myLat = res.coords.latitude;
       this.myLng = res.coords.longitude;

      //let latLng = new LatLng(res.coords.latitude, res.coords.longitude);
      let mapOptions: GoogleMapOptions = {
        camera: {
          zoom: 18,
          target: [
            {lat: this.myLat, lng: this.myLng}
          ]
        }
      }

      this.map = GoogleMaps.create('map_canvas', mapOptions);

      let marker: Marker = this.map.addMarkerSync({
        title: 'Você',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: this.myLat,
          lng: this.myLng
        }
      });

      this.infoUnidades.forEach( unidade =>{
            let lat : number;
            let lng : number;
            lat = unidade.latitude;
            lng = unidade.longitude;
            this.map.addMarkerSync({
              title: unidade.nome,
              icon: 'red',
              animation: 'DROP',
              position: {
                lat: lat,
                lng: lng
              }
            });
      });
    }).catch( err => {
      console.log(err);
    });

    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });


  }

  getLocation(){
    return this._geoLoc.getCurrentPosition();
  }

  inserirFiltros(){
    let userLoc = new LatLng(this.myLat, this.myLng)
    this.navCtrl.push(FormBuscaPage, {
      locUnidades: this.infoUnidades,
      userLoc : userLoc
    });
  }

  inserirTempoAtendimento(){
    this.navCtrl.push(FormTempoPage);
  }

}
