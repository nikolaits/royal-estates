import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-estate-home',
  templateUrl: './estate-home.page.html',
  styleUrls: ['./estate-home.page.scss'],
})
export class EstateHomePage implements OnInit {
  private locid = ""
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
