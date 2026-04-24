import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscriptionCrudComponent } from './components/inscription-crud/inscription-crud.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscripciones', component: InscriptionCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
