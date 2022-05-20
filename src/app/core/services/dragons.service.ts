import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dragon } from 'src/app/shared/models/dragon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private _http: HttpClient) { }

  getDragons(): Observable<Dragon[]> {
    return this._http.get(`${environment.baseURL}`) as Observable<Dragon[]>;
  }

  getDragon(id: number): Observable<Dragon> {
    return this._http.get(`${environment.baseURL}/${id}`) as Observable<Dragon>;
  }

  createDragon(dragon: Dragon): Observable<Dragon> {
    return this._http.post(`${environment.baseURL}`, dragon) as Observable<Dragon>;
  }

  editDragon(dragon: Dragon, id: number) {
    return this._http.put(`${environment.baseURL}/${id}`, dragon) as Observable<Dragon>;
  }

  deleteDragon(id: number) {
    return this._http.delete(`${environment.baseURL}/${id}`) as Observable<Dragon>;
  }
}
