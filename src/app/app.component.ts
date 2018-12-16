import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import {Nav} from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { CadastroUsuarioPage} from '../pages/cadastro-usuario/cadastro-usuario';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',

})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {

  }
  itemTapped():void {
    this.nav.push(CadastroUsuarioPage);
  }

}
