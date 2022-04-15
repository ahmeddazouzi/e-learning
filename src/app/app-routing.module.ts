import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminComponents/adminlogin/adminlogin.component';
import { CoursesListComponent } from './adminComponents/courses-list/courses-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserloginComponent } from './userComponents/userlogin/userlogin.component';
import { UserregistrationComponent } from './userComponents/userregistration/userregistration.component';


const routes:Routes=[{path:'admin/Getcourses',component:CoursesListComponent},
{path:'',redirectTo:'admin/Getcourses',pathMatch:'full'},
{path:'adminlogin',component:AdminloginComponent}
                    ];
@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
