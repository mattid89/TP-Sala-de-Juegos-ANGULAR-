import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jugador } from '../clases/jugador';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

    // Jugadores

    public createJugador(jugador: Jugador) {
      return this.db.collection('jugadores').doc(jugador.id).set({...jugador});
    }

    public getJugador(documentId: string) {
      return this.db.collection('jugadores').doc(documentId).get();
    }

    public getJugadores() {
      // return this.db.collection('jugadores').get();
      return this.db.collection('jugadores').snapshotChanges();
    }

    public updateJugador(documentId: string, jugador: Jugador) {
      return this.db.collection('jugadores').doc(documentId).update({...jugador});
    }

    public deleteJugador(documentId: string) {
      return this.db.collection('jugadores').doc(documentId).delete();
    }

}
