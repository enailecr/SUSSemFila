webpackJsonp([4],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(110);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnidadesProvider = /** @class */ (function () {
    function UnidadesProvider(db) {
        this.db = db;
        this.PATH = '/unidadeSUS/unidades/';
    }
    UnidadesProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('nome'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    UnidadesProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    //USAR PRA SALVAR TEMPO DE ATENDIMENTO
    UnidadesProvider.prototype.saveManha = function (unidade, tempoAtualizado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (unidade.key) {
                _this.db.list(_this.PATH)
                    .update(unidade.key, { tempoAtendimentoManha: tempoAtualizado })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ tempoAtendimentoManha: tempoAtualizado })
                    .then(function () { return resolve(); });
            }
        });
    };
    UnidadesProvider.prototype.saveTarde = function (unidade, tempoAtualizado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (unidade.key) {
                _this.db.list(_this.PATH)
                    .update(unidade.key, { tempoAtendimentoTarde: tempoAtualizado })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ tempoAtendimentoTarde: tempoAtualizado })
                    .then(function () { return resolve(); });
            }
        });
    };
    UnidadesProvider.prototype.saveNoite = function (unidade, tempoAtualizado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (unidade.key) {
                _this.db.list(_this.PATH)
                    .update(unidade.key, { tempoAtendimentoNoite: tempoAtualizado })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ tempoAtendimentoNoite: tempoAtualizado })
                    .then(function () { return resolve(); });
            }
        });
    };
    UnidadesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UnidadesProvider);
    return UnidadesProvider;
}());

//# sourceMappingURL=unidades.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_usuario_cadastro_usuario__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mapa__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, fb, loading) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loading = loading;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    HomePage.prototype.itemTapped = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */]);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        //this.navCtrl.push(FormTempoPage);
        //this.navCtrl.push(MapaPage);
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        var loader = this.loading.create({
            content: 'Verificando conta...',
        });
        loader.present().then(function () {
            _this.auth.signInWithEmail(credentials)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__mapa_mapa__["a" /* MapaPage */]); }, function (error) { return _this.loginError = error.message; });
            loader.dismiss();
        });
    };
    HomePage.prototype.goToResetPassword = function () {
        //this.navCtrl.push('ResetPasswordPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\home\home.html"*/'<ion-content  class="fundoazul">\n<ion-img width="150px" height="150px" class="logo" src="../assets/imgs/stethoscope.png"></ion-img>\n<ion-label class="tituloApp">SUS Sem Fila</ion-label>\n\n<form (ngSubmit)="login()" [formGroup]="loginForm">\n<ion-list>\n\n  <ion-item class="transparente" color="light" [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n    <ion-label floating color="light">Usuário</ion-label>\n    <ion-input type="email" formControlName="email"></ion-input>\n  </ion-item>\n  <div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">Deve ser um email válido</div>\n</div>\n\n  <ion-item class="transparente" [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n    <ion-label floating color="light">Senha</ion-label>\n    <ion-input type="password" formControlName="password"></ion-input>\n  </ion-item>\n\n<div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">Mínimo de 6 caracteres</div>\n</div>\n\n</ion-list>\n\n<div padding>\n  <button ion-button color="light" block  type="submit" [disabled]="!loginForm.valid">Login</button>\n</div>\n</form>\n<div class="form-error">{{loginError}}</div>\n\n<button ion-button icon-left clear full color="light" class="cadastrar" (click)="itemTapped()"><ion-icon name="person-add"></ion-icon>Novo aqui? Cadastre-se!</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroUsuarioPage = /** @class */ (function () {
    function CadastroUsuarioPage(fb, navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    CadastroUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroUsuarioPage');
    };
    CadastroUsuarioPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    CadastroUsuarioPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.signupError = error.message; });
    };
    CadastroUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-usuario',template:/*ion-inline-start:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\cadastro-usuario\cadastro-usuario.html"*/'<ion-content padding class="fundoazul">\n  <ion-img width="90px" height="90px" class="logo" src="../assets/imgs/stethoscope.png"></ion-img>\n  <ion-label class="tituloApp">Cadastre-se</ion-label>\n\n<form (ngSubmit)="signup()" [formGroup]="form" >\n  <ion-list>\n\n    <ion-item class="transparente" color="light"  [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n      <ion-label floating color="light">E-mail</ion-label>\n      <ion-input type="email" formControlName="email"></ion-input>\n    </ion-item>\n    <div ngxErrors="email" #emailErrors="ngxErrors">\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">Deve ser um em-mail válido</div>\n      </div>\n\n    <ion-item class="transparente" [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n      <ion-label floating color="light">Senha</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <div ngxErrors="password" #passwordErrors="ngxErrors">\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">Mínimo de 6 caracteres</div>\n      </div>\n  </ion-list>\n\n  <div padding>\n    <div class="form-error">{{signupError}}</div>\n    <p></p>\n    <button ion-button color="light" type="submit" block [disabled]="!form.valid">Cadastrar</button>\n  </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\cadastro-usuario\cadastro-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());

//# sourceMappingURL=cadastro-usuario.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        this.afAuth.auth.setPersistence(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].Auth.Persistence.LOCAL);
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormBuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_rota_mapa_rota__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormBuscaPage = /** @class */ (function () {
    function FormBuscaPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.locUnidades = [];
        this.unidades = [];
        this.locUnidades = navParams.get('locUnidades');
        this.userLoc = navParams.get('userLoc');
    }
    FormBuscaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormBuscaPage');
    };
    FormBuscaPage.prototype.buscar = function () {
        var _this = this;
        var date = new Date();
        var diaSemana = date.getDay();
        var horario = date.getHours();
        console.log(date);
        console.log(horario);
        console.log(diaSemana);
        var unidadesRaio = [];
        //Verifica unidades dentro do raio estipulado
        var raio = 0;
        raio = this.raio;
        raio = raio * 1000;
        this.locUnidades.forEach(function (unidade) {
            var uniLatLng = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* LatLng */](unidade.latitude, unidade.longitude);
            var distance = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["d" /* Spherical */].computeDistanceBetween(_this.userLoc, uniLatLng);
            console.log(distance);
            if (distance <= raio) {
                unidadesRaio.push(unidade);
                console.log("Unidade dentro do raio");
            }
        });
        console.log("saiu do 1o for");
        this.verificaDiaHorario(unidadesRaio).then(function (unidadesValidas) {
            console.log("validou e vai mostrar rota");
            if (unidadesValidas.length == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Não foi possível definir um unidade',
                    subTitle: 'Tente de novo com um raio de busca maior!',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mapa_rota_mapa_rota__["a" /* MapaRotaPage */], {
                    unidades: unidadesValidas,
                    userLoc: _this.userLoc,
                    transporte: _this.transporte
                });
            }
        });
    };
    FormBuscaPage.prototype.verificaDiaHorario = function (unidadesRaio) {
        var _this = this;
        //Verifica se unidade atende aquele dia e horário
        var unidadesValidas = [];
        console.log("vai entrar no 2o for");
        return new Promise(function (resolve) {
            unidadesRaio.forEach(function (unidade) {
                console.log("entrou no 2o for");
                if (((unidade.terca == false) && (_this.diaSemana == 2)) ||
                    ((unidade.quarta == false) && (_this.diaSemana == 3)) ||
                    ((unidade.segunda == false) && (_this.diaSemana == 1)) ||
                    ((unidade.quinta == false) && (_this.diaSemana == 4)) ||
                    ((unidade.sexta == false) && (_this.diaSemana == 5)) ||
                    ((unidade.sabado == false) && (_this.diaSemana == 6)) ||
                    ((unidade.domingo == false) && (_this.diaSemana == 7))) {
                    console.log("Não atende neste dia");
                }
                else {
                    if ((unidade.inicioAtendimento == 0) && (unidade.fimAtendimento == 0)) {
                        unidadesValidas.push(unidade);
                        console.log("validou unidade" + unidade.nome);
                    }
                    else {
                        if ((_this.horario >= unidade.inicioAtendimento) && (_this.horario < unidade.fimAtendimento)) {
                            unidadesValidas.push(unidade);
                            console.log("validou unidade" + unidade.nome);
                        }
                        else {
                            console.log("REMOVIDO POR NÃO ESTAR NO HORARIO ACEITAVEL " + unidade.nome);
                        }
                    }
                }
            });
            resolve(unidadesValidas);
        });
    };
    FormBuscaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form-busca',template:/*ion-inline-start:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\form-busca\form-busca.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filtros de busca</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="buscar()">\n  <ion-list>\n\n    <ion-item>\n      <ion-label>Raio de busca (em Km)</ion-label>\n      <ion-range min="1" max="50" [(ngModel)]="raio" name="raio" pin="true">\n        <ion-label range-left>1</ion-label>\n        <ion-label range-right>50</ion-label>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Meio de transporte preferencial</ion-label>\n      <ion-select [(ngModel)]="transporte" name="transporte">\n        <ion-option value="WALKING">A pé</ion-option>\n        <ion-option value="DRIVING">Carro</ion-option>\n        <ion-option value="TRANSIT">Transporte público</ion-option>\n        <ion-option value="BICYCLING">Bicicleta</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- <ion-item >\n      <ion-label >Especialidade médica</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item> -->\n\n  </ion-list>\n  <button ion-button color="light" block type="submit">\n    Busca unidade SUS\n  </button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\form-busca\form-busca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FormBuscaPage);
    return FormBuscaPage;
}());

//# sourceMappingURL=form-busca.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaRotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MapaRotaPage = /** @class */ (function () {
    function MapaRotaPage(navCtrl, navParams, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.unidades = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.menorDistancia = 999999;
        this.unidades = navParams.get('unidades');
        this.userLoc = navParams.get('userLoc');
        this.travelMode = navParams.get('transporte');
    }
    MapaRotaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Montando rota...',
        });
        loader.present().then(function () {
            _this.initializeMap();
            loader.dismiss();
        });
    };
    MapaRotaPage.prototype.initializeMap = function () {
        var mapOptions = {
            zoom: 18,
            center: this.userLoc,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        this.directionsDisplay.setMap(this.map);
        var marker = new google.maps.Marker({
            position: this.userLoc,
            map: this.map,
            icon: 'blue',
        });
        this.calculateRoute();
    };
    MapaRotaPage.prototype.calculateRoute = function () {
        var _this = this;
        this.menorDistancia = 999999;
        //this.defineTempoRotas();
        var unidades = this.unidades;
        var userLoc = this.userLoc;
        var travelMode = this.travelMode;
        if (!travelMode) {
            travelMode = 'DRIVING';
        }
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var menorDist = this.menorDistancia;
        var melhorUnidade;
        var ctr = 0;
        console.log("vai entrar no for de calcular rotas");
        var _loop_1 = function (i) {
            unidades[i];
            var coordUni = new google.maps.LatLng(unidades[i].latitude, unidades[i].longitude);
            var request = {
                origin: userLoc,
                destination: coordUni,
                travelMode: travelMode
            };
            var date = new Date();
            var horario = date.getHours();
            var tempoAtendimento = void 0;
            if ((horario >= 6) && (horario < 12)) {
                tempoAtendimento = unidades[i].tempoAtendimentoManha;
            }
            else {
                if ((horario >= 12) && (horario < 18)) {
                    tempoAtendimento = unidades[i].tempoAtendimentoTarde;
                }
                else {
                    tempoAtendimento = unidades[i].tempoAtendimentoNoite;
                }
            }
            console.log("for: pegou o tempo de atendimento " + tempoAtendimento);
            this_1.defineTempoRota(directionsService, directionsDisplay, tempoAtendimento, unidades[i], request).then(function (totalDuration) {
                console.log("resultado da funcao " + totalDuration);
                console.log("menor distancia " + menorDist);
                if (totalDuration < menorDist) {
                    melhorUnidade = unidades[i];
                    menorDist = totalDuration;
                    console.log("Definiu como Melhor unidade " + melhorUnidade.nome);
                }
                ctr++;
                if (ctr === unidades.length) {
                    if (melhorUnidade) {
                        _this.bestUnidade = melhorUnidade.nome;
                        _this.achouMelhorUnidade(userLoc, travelMode, melhorUnidade, menorDist);
                    }
                    else
                        _this.mapaError = "Não foi possível encontrar uma unidade dentro do raio estipulado. Já tentou aumentar o raio de busca?";
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < unidades.length; i++) {
            _loop_1(i);
        }
    };
    MapaRotaPage.prototype.achouMelhorUnidade = function (userLoc, travelMode, melhorUnidade, menorDistancia) {
        var coordMelhorUni = new google.maps.LatLng(melhorUnidade.latitude, melhorUnidade.longitude);
        var request = {
            origin: userLoc,
            destination: coordMelhorUni,
            travelMode: travelMode
        };
        this.traceRoute(this.directionsService, this.directionsDisplay, request, menorDistancia, melhorUnidade);
    };
    MapaRotaPage.prototype.defineTempoRota = function (service, display, tempoAtendimento, unidade, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        service.route(request, function (result, status) {
                            if (status == 'OK') {
                                //var directionsResult = result.getDirections();
                                var route = result.routes[0];
                                var duracaoCaminho = 0;
                                var legs = route.legs;
                                for (var i = 0; i < legs.length; ++i) {
                                    duracaoCaminho += legs[i].duration.value;
                                }
                                var totalDuration = 0;
                                totalDuration = +duracaoCaminho + +tempoAtendimento;
                                console.log("duração caminho " + totalDuration);
                            }
                            else {
                                console.log("ERRO");
                            }
                            resolve(totalDuration);
                        });
                    })];
            });
        });
    };
    MapaRotaPage.prototype.traceRoute = function (service, display, request, menorDistancia, melhorUnidade) {
        service.route(request, function (result, status) {
            if (status == 'OK') {
                display.setDirections(result);
            }
        });
        var hora = duas_casas(Math.round(menorDistancia / 3600));
        var minuto = duas_casas(Math.floor((menorDistancia % 3600) / 60));
        var segundo = duas_casas((menorDistancia % 3600) % 60);
        this.tempoTotal = hora + ":" + minuto + ":" + segundo;
        function duas_casas(numero) {
            if (numero <= 9) {
                numero = "0" + numero;
            }
            return numero;
        }
    };
    MapaRotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa-rota',template:/*ion-inline-start:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\mapa-rota\mapa-rota.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rota até a melhor unidade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="form-error">{{mapaError}}</div>\n<div>\n  <h3>Tempo Total para ser atendido: {{tempoTotal}}</h3>\n  <h4>Unidade SUS: {{bestUnidade}}</h4>\n</div>\n<div #map id="map" style="height:100%;"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\mapa-rota\mapa-rota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MapaRotaPage);
    return MapaRotaPage;
}());

//# sourceMappingURL=mapa-rota.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTempoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_unidades_unidades__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormTempoPage = /** @class */ (function () {
    function FormTempoPage(navCtrl, navParams, provider, fb, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.unidades = this.provider.getAll();
        this.unidadeForm = fb.group({
            unidade: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])],
            tempoAtendimento: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required])]
        });
    }
    FormTempoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormTempoPage');
    };
    FormTempoPage.prototype.cadastrar = function () {
        var data = this.unidadeForm.value;
        if ((!data.unidade) || (!data.tempoAtendimento)) {
            return;
        }
        var hora = parseFloat(data.tempoAtendimento.substr(0, 2));
        var minuto = parseFloat(data.tempoAtendimento.substr(3, 2));
        var segundosTotal = 0;
        var segundosHora = hora * 60 * 60;
        var segundosMinuto = minuto * 60;
        segundosTotal = segundosHora + segundosMinuto;
        console.log(segundosTotal);
        console.log(' hora: ' + segundosHora);
        console.log(' minuto: ' + segundosMinuto);
        var date = new Date();
        var horario = date.getHours();
        console.log(horario);
        var tempoAtd = 0;
        var mediaTempo = 0;
        if ((horario >= 6) && (horario < 12)) {
            tempoAtd = parseFloat(data.unidade.tempoAtendimentoManha);
            mediaTempo = (tempoAtd + segundosTotal) / 2;
            this.provider.saveManha(data.unidade, mediaTempo);
        }
        else {
            if ((horario >= 12) && (horario < 18)) {
                tempoAtd = parseFloat(data.unidade.tempoAtendimentoTarde);
                mediaTempo = (tempoAtd + segundosTotal) / 2;
                this.provider.saveTarde(data.unidade, mediaTempo);
            }
            else {
                tempoAtd = parseFloat(data.unidade.tempoAtendimentoNoite);
                mediaTempo = (tempoAtd + segundosTotal) / 2;
                this.provider.saveNoite(data.unidade, mediaTempo);
            }
        }
        var alert = this.alertCtrl.create({
            title: 'Obrigado pela contribuição!',
            subTitle: 'Para essa plataforma funcionar corretamente, sua contribuição é essencial!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mapa_mapa__["a" /* MapaPage */]);
    };
    FormTempoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form-tempo',template:/*ion-inline-start:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\form-tempo\form-tempo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adicionar Tempo de Atendimento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="cadastrar()" [formGroup]="unidadeForm">\n  <ion-list>\n    <ion-item>\n      <ion-label>Unidade</ion-label>\n      <ion-select  formControlName="unidade">\n        <ion-option *ngFor="let unidade of unidades | async" [value]="unidade">\n          {{unidade.nome}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n    <ion-label floating>Tempo de atendimento</ion-label>\n    <ion-input type="time" formControlName="tempoAtendimento"></ion-input>\n  </ion-item>\n\n  </ion-list>\n  <button ion-button type="submit" color="light" block >Cadastrar informação</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\form-tempo\form-tempo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_unidades_unidades__["a" /* UnidadesProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FormTempoPage);
    return FormTempoPage;
}());

//# sourceMappingURL=form-tempo.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/form-busca/form-busca.module": [
		466,
		3
	],
	"../pages/form-tempo/form-tempo.module": [
		468,
		2
	],
	"../pages/mapa-rota/mapa-rota.module": [
		469,
		1
	],
	"../pages/mapa/mapa.module": [
		467,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_usuario_cadastro_usuario__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mapa_rota_mapa_rota__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_form_busca_form_busca__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_form_tempo_form_tempo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ultimate_ngxerrors__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_firebase_service__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_unidades_unidades__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_form_busca_form_busca__["a" /* FormBuscaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_form_tempo_form_tempo__["a" /* FormTempoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mapa_rota_mapa_rota__["a" /* MapaRotaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/form-busca/form-busca.module#FormBuscaPageModule', name: 'FormBuscaPage', segment: 'form-busca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form-tempo/form-tempo.module#FormTempoPageModule', name: 'FormTempoPage', segment: 'form-tempo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa-rota/mapa-rota.module#MapaRotaPageModule', name: 'MapaRotaPage', segment: 'mapa-rota', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_19__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_form_busca_form_busca__["a" /* FormBuscaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_form_tempo_form_tempo__["a" /* FormTempoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mapa_rota_mapa_rota__["a" /* MapaRotaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__["b" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__services_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_unidades_unidades__["a" /* UnidadesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Unidade; });
var Unidade = /** @class */ (function () {
    function Unidade() {
    }
    Unidade.prototype.getLatitude = function () {
        return this.latitude;
    };
    Unidade.prototype.getLongitude = function () {
        return this.longitude;
    };
    return Unidade;
}());

//# sourceMappingURL=unidade.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cadastro_usuario_cadastro_usuario__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
    }
    MyApp.prototype.itemTapped = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: '<ion-nav [root]="rootPage"></ion-nav>',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    production: false,
    fire: {
        apiKey: 'AIzaSyAC9-rDXb6OwXbd71W_e-pMBp5_x_aGfr0',
        authDomain: 'crowd-sus-1538659846192.firebaseapp.com',
        databaseURL: 'https://crowd-sus-1538659846192.firebaseio.com',
        projectId: 'crowd-sus-1538659846192',
        storageBucket: 'crowd-sus-1538659846192.appspot.com',
        messagingSenderId: '628201443626',
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(110);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
Generated class for the FirebaseServiceProvider provider.
See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(db) {
        this.db = db;
    }
    FirebaseServiceProvider.prototype.getAll = function () {
        return this.db.list('/unidadeSUS', function (ref) { return ref.orderByChild('nome'); }).snapshotChanges().map(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        });
    };
    FirebaseServiceProvider.prototype.get = function (key) {
        return this.db.object('/unidadeSUS/' + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_busca_form_busca__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_tempo_form_tempo__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_unidades_unidades__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_unidade__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, _geoLoc, provider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._geoLoc = _geoLoc;
        this.provider = provider;
        this.infoUnidades = [];
        this.unidades = this.provider.getAll();
        this.unidades.subscribe(function (items) {
            items.forEach(function (item) {
                var unidade = new __WEBPACK_IMPORTED_MODULE_7__models_unidade__["a" /* Unidade */]();
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
                _this.infoUnidades.push(unidade);
                console.log("ITERACAO INFOUNIDADES " + _this.infoUnidades.length);
            });
        });
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapaPage.prototype.loadMap = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* Environment */].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAC9-rDXb6OwXbd71W_e-pMBp5_x_aGfr0',
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAC9-rDXb6OwXbd71W_e-pMBp5_x_aGfr0'
        });
        this.getLocation().then(function (res) {
            //Once location is gotten, we set the location on the camera.
            _this.myLat = res.coords.latitude;
            _this.myLng = res.coords.longitude;
            //let latLng = new LatLng(res.coords.latitude, res.coords.longitude);
            var mapOptions = {
                camera: {
                    zoom: 18,
                    target: [
                        { lat: _this.myLat, lng: _this.myLng }
                    ]
                }
            };
            _this.map = __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["b" /* GoogleMaps */].create('map_canvas', mapOptions);
            var marker = _this.map.addMarkerSync({
                title: 'Você',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: _this.myLat,
                    lng: _this.myLng
                }
            });
            _this.infoUnidades.forEach(function (unidade) {
                var lat;
                var lng;
                lat = unidade.latitude;
                lng = unidade.longitude;
                _this.map.addMarkerSync({
                    title: unidade.nome,
                    icon: 'red',
                    animation: 'DROP',
                    position: {
                        lat: lat,
                        lng: lng
                    }
                });
            });
        }).catch(function (err) {
            console.log(err);
        });
        // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //   alert('clicked');
        // });
    };
    MapaPage.prototype.getLocation = function () {
        return this._geoLoc.getCurrentPosition();
    };
    MapaPage.prototype.inserirFiltros = function () {
        var userLoc = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["c" /* LatLng */](this.myLat, this.myLng);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__form_busca_form_busca__["a" /* FormBuscaPage */], {
            locUnidades: this.infoUnidades,
            userLoc: userLoc
        });
    };
    MapaPage.prototype.inserirTempoAtendimento = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__form_tempo_form_tempo__["a" /* FormTempoPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapaPage.prototype, "mapElement", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\mapa\mapa.html"*/'<ion-content padding>\n\n\n<ion-fab left bottom>\n  <button ion-fab mini (click)="inserirTempoAtendimento()"><ion-icon name="add"></ion-icon></button>\n</ion-fab>\n<ion-fab right bottom>\n  <button ion-fab (click)="inserirFiltros()"><ion-icon name="search"></ion-icon></button>\n</ion-fab>\n<div #map id="map_canvas" style="height:100%;">\n\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\enail\Documentos\PF2\SUSSemFila\src\pages\mapa\mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_unidades_unidades__["a" /* UnidadesProvider */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map