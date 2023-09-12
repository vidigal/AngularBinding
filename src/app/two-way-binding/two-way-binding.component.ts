import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  texto = ""
  nome = ""

  digitouCaractere(str: any) {
    this.texto = str;
  }

}
