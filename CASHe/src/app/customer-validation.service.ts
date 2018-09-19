import { Injectable } from '@angular/core';
import {Http ,Headers, Response,RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerValidationService {

  constructor( private http:Http) { 
    
  }

  public getCustomersData(y:any){
   /* return this.http.get('assets/Mock_Json/customerValidation.json')
                 .pipe(map(res=>res.json())
                 ,catchError((error:Response|any)=>throwError("error"))
                 );
                 
    */
   console.log("y value"+y);

   let getHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


   return this.http.post('assets/Mock_Json/customerPostValidation.json', y, {header: getHeaders})
   .pipe(
    map(res => res.json()),
   catchError((error:Response|any)=>throwError("error"))
  );     
  }
}
