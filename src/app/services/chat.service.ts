import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mensaje } from '../models/mensajes.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje [] = [];
  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges()
    .pipe(map( (mensajes:Mensaje[])=>{
                  this.chats = mensajes;
                }))
  }

  agregarMensaje(texto:string){
    let mensaje: Mensaje = {
      nombre: 'Daniel Garcia',
      mensaje: texto,
      fecha: new Date().getTime()      
    }
    return this.itemsCollection.add( mensaje );
  }
}
