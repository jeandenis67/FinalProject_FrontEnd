import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  salle: Salle = new Salle();
  myForm = new FormGroup({
    id: new FormControl('', Validators.required),
    capacite: new FormControl('', Validators.required),
    batiment: new FormControl('', Validators.required),
    etage: new FormControl('', Validators.required),
    tp: new FormControl('', Validators.required),
    seances: new FormControl('', Validators.required),
  
  });

  constructor(private salService: SalleService) { }
  lstSalles: any[];
  ngOnInit() {
    this.findAll() ;

  }

  ajout(salle: Salle) : void {

    this.salService.ajout(this.salle).subscribe
    (
      data => {
        console.log("Salle ajoutée <(^-^<) !!");
      });
  }

  suppr(id: var) : void {

    this.salService.suppr(this.id).subscribe
    (
      data => {
        console.log( "Salle supprimée <('-'<) !!" );
      });
  }

  modif(salle: Salle) : void {

    this.salService.modif(this.salle).subscribe
    (
      data => {
        console.log( "Salle modifiée <('-'<) !!" );
      });
  }

  find(id: var) : Enseignant {

    this.salService.find(this.id).subscribe
    (
      data => {
        console.log( "Salle trouvée /('-')/ !!" );
      });
  }

  findAll() {
    this.salService.findAll().subscribe(data => {
      this.lstSalles = data;
    },
      error => { console.log(error); });
  }
}
