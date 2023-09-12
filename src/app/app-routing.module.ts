import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  {path: "principal", component: PrincipalComponent},
  {path: "property-binding", component: PropertyBindingComponent},
  {path: "interpolacao", component: InterpolacaoComponent},
  {path: "two-way-binding", component: TwoWayBindingComponent},
  {path: "event-binding", component: EventBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
