import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserloginComponent } from './userComponents/userlogin/userlogin.component';
import { UserregistrationComponent } from './userComponents/userregistration/userregistration.component';
import { AdminloginComponent } from './adminComponents/adminlogin/adminlogin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PathsComponent } from './paths/paths.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesListComponent } from './adminComponents/courses-list/courses-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminCourseService } from './admin-course.service';
//import { CouseslisttetstComponent } from './couseslisttetst/couseslisttetst.component';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserregistrationComponent,
    AdminloginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PathsComponent,
    CoursesComponent,
    EventsComponent,
    AboutUsComponent,
    CoursesListComponent,
    //CouseslisttetstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AdminCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
