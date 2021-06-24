import { Component, Input, OnInit } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {
  user:any;
  constructor(private userD:UserDetailsComponent) { }

  ngOnInit(): void {
    this.user=this.userD.getUser();
  }

  
 
}
