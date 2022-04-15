import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
private baseUrl="http://localhost:8080/admin/adminLogIn";
  constructor(private httpClient :HttpClient) { }

  login(admin:Admin):Observable<object>{
    console.log(admin);
    

    return this.httpClient.post(`${this.baseUrl}`,admin);
  }
}
