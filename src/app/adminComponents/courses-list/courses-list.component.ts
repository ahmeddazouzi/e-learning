import { Component, OnInit } from '@angular/core';
import { AdminCourseService } from 'src/app/admin-course.service';
import { Course } from 'src/app/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

 courses : Course[];


  constructor(private adminCourseService :AdminCourseService) { }

  ngOnInit(): void {
    this.getCourses();
    
  }
  private getCourses(){
    this.adminCourseService.getCoursesList().subscribe(data=>{this.courses=data});
  }
}