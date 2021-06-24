import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:any="";
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.title=this.activatedRoute.routeConfig?.path
  }

}
