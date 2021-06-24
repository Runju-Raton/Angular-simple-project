import { UsersService } from './../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id='';
  user:any=[];
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private userService: UsersService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.userService.getAllUsers(this.id).subscribe((data)=>{
      this.user=data;
    });
  }
 
  getUser(){
    return this.user;
  }
}
