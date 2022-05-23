import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // variables
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  clear(): void{
    this.messages.length = 0;
  }
}
