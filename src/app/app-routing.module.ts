import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant/enseignant.component';
import { GradeComponent } from './grade/grade/grade.component';
import { SalleComponent } from './salle/salle/salle.component';
import { SeanceComponent } from './seance/seance/seance.component';
import { AdminComponent } from './admin/admin/admin.component';


const routes: Routes = [

  {path:'enseignant', component:EnseignantComponent},
  {path:'grade', component:GradeComponent},
  {path:'salle', component:SalleComponent},
  {path:'seance', component:SeanceComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
