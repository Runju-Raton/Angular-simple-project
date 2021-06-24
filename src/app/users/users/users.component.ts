import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any={
    length:0
  };

  errorMessage="Loading...";
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
   this.usersService.getAllUsers().subscribe((data)=>{
    this.users = data;
   },(error)=>{
     this.users.length=0;
     this.errorMessage="Some internal issues... catch error";
   });
  }

}
