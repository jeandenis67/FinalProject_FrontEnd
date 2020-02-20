import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnseignantComponent } from './enseignant/enseignant/enseignant.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  ajout(admin: Admin): Observable<any> {
    return this.http.post('http:localhost:8070/admin/ajout', admin);
  }

  suppr(admin: Admin): Observable<any> {
    return this.http.delete('http:localhost:8070/admin/suppr'+ admin.id);
  }

  modif(admin: Admin) : Observable<any> {
    return this.http.post('http:localhost:8070/admin/modif', admin);
  }

  find(admin: Admin) : Observable<any> {
    return this.http.get('http:localhost:8070/admin/find'+ admin.id);
  }

  findAll(): Observable<any> {
    return this.http.get('http:localhost:8070/admin/findAll');


}
}
