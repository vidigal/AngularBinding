import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  clicou() {
    alert("Foi dado um clique no botão")
  }
  
  passouMouse() {
    alert("Mouse passou")
  }

}
