import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/admin';
import { AdminLoginService } from 'src/app/admin-login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
   admin:Admin =new Admin;
  constructor(private adminloginservice :AdminLoginService) { }

  ngOnInit(): void {
  }
  adminLogin(){

    console.log(this.admin);
    this.adminloginservice.login(this.admin).subscribe(data =>{

      alert("WELCOMME ADMIN ")
    },error =>alert("SORRY , WE CAN't CONNECT TO OUR HOME . PLEASE TRY LATER ")
    )
    
  }
}
