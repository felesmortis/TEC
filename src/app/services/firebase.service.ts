import { Injectable } from '@angular/core';
import { AngularFireDatabase,
  FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  constructor(private _db: AngularFireDatabase) { }

}
