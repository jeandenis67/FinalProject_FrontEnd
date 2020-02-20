import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {
  seance: Seance = new Seance();
  myForm = new FormGroup({
    id: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    dateDebut: new FormControl('', Validators.required),
    dateFin: new FormControl('', Validators.required),
    duree: new FormControl('', Validators.required),
    matiere: new FormControl('', Validators.required),
    enseignants: new FormControl('', Validators.required),
    salle: new FormControl('', Validators.required),

  });

  constructor(private seaService: SeanceService) { }
  lstSeances: any[];
  ngOnInit() {
    this.findAll() ;

  }

  ajout(seance: Seance) : void {

    this.seaService.ajout(this.seance).subscribe
    (
      data => {
        console.log("Seance ajoutée <(^-^<) !!");
      });
  }

  suppr(id: var) : void {

    this.seaService.suppr(this.id).subscribe
    (
      data => {
        console.log( "Seance supprimée <('-'<) !!" );
      });
  }

  modif(seance: Seance) : void {

    this.seaService.modif(this.seance).subscribe
    (
      data => {
        console.log( "Seance modifiée <('-'<) !!" );
      });
  }

  find(id: var) : Enseignant {

    this.seaService.find(this.id).subscribe
    (
      data => {
        console.log( "Seance trouvée /('-')/ !!" );
      });
  }

  findAll() {
    this.seaService.findAll().subscribe(data => {
      this.lstSeances = data;
    },
      error => { console.log(error); });
  }
}
