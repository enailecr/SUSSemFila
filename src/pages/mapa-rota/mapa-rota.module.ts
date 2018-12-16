import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaRotaPage } from './mapa-rota';

@NgModule({
  declarations: [
    MapaRotaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaRotaPage),
  ],
})
export class MapaRotaPageModule {}
