import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminComponents/adminlogin/adminlogin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserloginComponent } from './userComponents/userlogin/userlogin.component';
import { UserregistrationComponent } from './userComponents/userregistration/userregistration.component';


const routes:Routes=[
                    ];
@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
