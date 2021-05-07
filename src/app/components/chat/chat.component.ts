import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent {
  mensaje:string = "";

  constructor(private chatservice: ChatService) { 
    this.chatservice.cargarMensajes()
        .subscribe()
  }

  enviarMensaje(){  
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return      
    }
    this.chatservice.agregarMensaje(this.mensaje)
        .then( ()=>this.mensaje="")
        .catch( ()=>console.error("error al enviar mensaje"))
  }
}
