import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iprod } from '../models/prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string=`${environment.baseUrl}`
  constructor(
    private _http:HttpClient
  ) { }

  getallProducts():Observable<Array<Iprod>>{
    return this._http.get<any>(`${this.baseUrl}/filter?category=Mobiles`).pipe(
      map(data=>Object.keys(data).map(key=>({...data[key],id:key}))),
      // tap(arr => console.log('service fetched products ▶', arr))
    )
   
    
  }


  getSingleProduct(id:string):Observable<Iprod>{
    return this._http.get<any>(`${this.baseUrl}/${id}`)
  }
}
