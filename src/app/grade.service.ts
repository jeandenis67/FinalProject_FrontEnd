import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http:HttpClient) { }

  ajout(grade: Grade): Observable<any> {
    return this.http.post('http:localhost:8070/grade/ajout', grade);
  }

  suppr(grade: Grade): Observable<any> {
    return this.http.delete('http:localhost:8070/grade/suppr'+ grade.id);
  }

  modif(grade: Grade) : Observable<any> {
    return this.http.post('http:localhost:8070/grade/modif', grade);
  }

  find(grade: Grade) : Observable<any> {
    return this.http.get('http:localhost:8070/grade/find'+ grade.id);
  }

  findAll(): Observable<any> {
    return this.http.get('http:localhost:8070/grade/findAll');


}
}
