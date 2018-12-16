import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UnidadesProvider {

  private PATH = '/unidadeSUS/unidades/';
  constructor(private db: AngularFireDatabase) {

  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  //USAR PRA SALVAR TEMPO DE ATENDIMENTO
  saveManha(unidade: any, tempoAtualizado: any) {
    return new Promise((resolve, reject) => {
      if (unidade.key) {
        this.db.list(this.PATH)
          .update(unidade.key, { tempoAtendimentoManha: tempoAtualizado })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ tempoAtendimentoManha: tempoAtualizado })
          .then(() => resolve());
      }
    })
  }

  saveTarde(unidade: any, tempoAtualizado: any) {
    return new Promise((resolve, reject) => {
      if (unidade.key) {
        this.db.list(this.PATH)
          .update(unidade.key, { tempoAtendimentoTarde: tempoAtualizado })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ tempoAtendimentoTarde: tempoAtualizado })
          .then(() => resolve());
      }
    })
  }

  saveNoite(unidade: any, tempoAtualizado: any) {
    return new Promise((resolve, reject) => {
      if (unidade.key) {
        this.db.list(this.PATH)
          .update(unidade.key, { tempoAtendimentoNoite: tempoAtualizado })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ tempoAtendimentoNoite: tempoAtualizado })
          .then(() => resolve());
      }
    })
  }

}
