import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
/*
Generated class for the FirebaseServiceProvider provider.
See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list('/unidadeSUS', ref => ref.orderByChild('nome')).snapshotChanges().map(data => {
      return data.map(d => ({key: d.key, ...d.payload.val()}));
    });
  }

  get(key: string) {
    return this.db.object('/unidadeSUS/' + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
}
