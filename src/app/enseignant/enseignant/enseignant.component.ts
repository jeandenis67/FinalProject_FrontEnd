import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  enseignant: Enseignant = new Enseignant();
  myForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    matiere: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    numTel: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    seances: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),

  });

  constructor(private ensService: EnseignantService) { }
  lstEnseignants: any[];
  ngOnInit() {
    this.findAll() ;

  }

  ajout(enseignant: Enseignant) : void {

    this.ensService.ajout(this.enseignant).subscribe
    (
      data => {
        console.log("Enseignant ajouté <(^-^<) !!");
      });
  }

  suppr(id: var) : void {

    this.ensService.suppr(this.id).subscribe
    (
      data => {
        console.log( "Enseignant supprimé <('-'<) !!" );
      });
  }

  modif(enseignant: Enseignant) : void {

    this.ensService.modif(this.enseignant).subscribe
    (
      data => {
        console.log( "Enseignant modifié <('-'<) !!" );
      });
  }

  find(id: var) : Enseignant {

    this.ensService.find(this.id).subscribe
    (
      data => {
        console.log( "Enseignant trouvé /('-')/ !!" );
      });
  }

  findAll() {
    this.ensService.findAll().subscribe(data => {
      this.lstEnseignants = data;
    },
      error => { console.log(error); });
  }
}
