import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormBuscaPage } from './form-busca';

@NgModule({
  declarations: [
    FormBuscaPage,
  ],
  imports: [
    IonicPageModule.forChild(FormBuscaPage),
  ],
})
export class FormBuscaPageModule {}
