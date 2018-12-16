import { Component } from '@angular/core';
import {
  NavController,
  LoadingController
 } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CadastroUsuarioPage} from '../cadastro-usuario/cadastro-usuario';
import { MapaPage } from '../mapa/mapa';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: FormGroup;
  loginError: string;

  constructor(
    private navCtrl: NavController,
		private auth: AuthService,
    fb: FormBuilder,
    public loading: LoadingController) {
      this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
});
    }

  itemTapped():void {
    this.navCtrl.push(CadastroUsuarioPage);
  }

  login():void{
    //this.navCtrl.push(FormTempoPage);
    //this.navCtrl.push(MapaPage);
    let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};

    let loader = this.loading.create({
      content: 'Verificando conta...',
    });

  loader.present().then(() => {
    this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(MapaPage),
				error => this.loginError = error.message
      );
    loader.dismiss();
  });

  }

  goToResetPassword(): void {
    //this.navCtrl.push('ResetPasswordPage');
  }
}
