import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PrincipalComponent } from './principal/principal.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PrincipalComponent,
    PropertyBindingComponent,
    InterpolacaoComponent,
    TwoWayBindingComponent,
    EventBindingComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
