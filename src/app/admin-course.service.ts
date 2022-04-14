import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';


@Injectable({
  providedIn: 'root'
})
export class AdminCourseService {

private baseUrl="http://localhost:8080/admin/courses/getCourses";

  constructor(private httpClient :HttpClient) { }


getCoursesList():Observable<Course[]>{
  return this.httpClient.get<Course[]>(`${this.baseUrl}`);                    

}

}
