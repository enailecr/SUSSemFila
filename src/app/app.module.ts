import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroUsuarioPage} from '../pages/cadastro-usuario/cadastro-usuario';
import { MapaPage } from '../pages/mapa/mapa';
import { MapaRotaPage } from '../pages/mapa-rota/mapa-rota';
import { FormBuscaPage } from '../pages/form-busca/form-busca';
import { FormTempoPage } from '../pages/form-tempo/form-tempo';
import { GoogleMaps } from "@ionic-native/google-maps";
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { FirebaseServiceProvider } from '../services/firebase-service';
import { UnidadesProvider } from '../providers/unidades/unidades';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroUsuarioPage,
    MapaPage,
    FormBuscaPage,
    FormTempoPage,
    MapaRotaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    NgxErrorsModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroUsuarioPage,
    MapaPage,
    FormBuscaPage,
    FormTempoPage,
    MapaRotaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService,
    FirebaseServiceProvider,
    UnidadesProvider
  ]
})
export class AppModule {}
