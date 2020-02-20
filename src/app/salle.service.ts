import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http:HttpClient) { }

  ajout(salle: Salle): Observable<any> {
    return this.http.post('http:localhost:8070/salle/ajout', salle);
  }

  suppr(salle: Salle): Observable<any> {
    return this.http.delete('http:localhost:8070/salle/suppr'+ salle.id);
  }

  modif(salle: Salle) : Observable<any> {
    return this.http.post('http:localhost:8070/salle/modif', salle);
  }

  find(salle: Salle) : Observable<any> {
    return this.http.get('http:localhost:8070/salle/find'+ salle.id);
  }

  findAll(): Observable<any> {
    return this.http.get('http:localhost:8070/salle/findAll');


}
}
