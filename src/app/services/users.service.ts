import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  constructor(private http: HttpClient) { }
  getAllUsers(paramId: string=''){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+paramId).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error:HttpErrorResponse){
    console.log(error);
    return throwError(error.error);
  }
}
 