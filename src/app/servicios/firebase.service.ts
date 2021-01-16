import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public fireAuth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  createUser(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.fireAuth.signOut();
  }
}
