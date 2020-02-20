import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant/enseignant.component';
import { AdminComponent } from './admin/admin/admin.component';
import { GradeComponent } from './grade/grade/grade.component';
import { SalleComponent } from './salle/salle/salle.component';
import { SeanceComponent } from './seance/seance/seance.component';
import { GradeService } from './grade.service';
import { EnseignantService } from './enseignant.service';
import { AdminService } from './admin.service';
import { SalleService } from './salle.service';
import { SeanceService } from './seance.service';

@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    AdminComponent,
    GradeComponent,
    SalleComponent,
    SeanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'})

  ],
  providers: [
EnseignantService,
GradeService,
AdminService,
SalleService,
SeanceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
