import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  frmAuth = new FormGroup({
    controlEmail: new FormControl(),
    controlSenha: new FormControl(),
    controlLembrar: new FormControl()
  })

  submeter() {
    console.log("Formulário submetido")
    console.log("Email: " + this.frmAuth.controls.controlEmail.value)
    console.log("Senha: " + this.frmAuth.controls.controlSenha.value)
    console.log("Lembrar: " + this.frmAuth.controls.controlLembrar.value)
  }

}
