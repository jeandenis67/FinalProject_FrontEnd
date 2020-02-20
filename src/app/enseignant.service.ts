import { Injectable } from '@angular/core';
import { EnseignantComponent } from './enseignant/enseignant/enseignant.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http:HttpClient) { }

  ajout(enseignant: Enseignant): Observable<any> {
    return this.http.post('http:localhost:8070/enseignant/ajout', enseignant);
  }

  suppr(enseignant: Enseignant): Observable<any> {
    return this.http.delete('http:localhost:8070/enseignant/suppr'+ enseignant.id);
  }

  modif(enseignant: Enseignant) : Observable<any> {
    return this.http.post('http:localhost:8070/enseignant/modif', enseignant);
  }

  find(enseignant: Enseignant) : Observable<any> {
    return this.http.get('http:localhost:8070/enseignant/find'+ enseignant.id);
  }

  findAll(): Observable<any> {
    return this.http.get('http:localhost:8070/enseignant/findAll');


}
}
