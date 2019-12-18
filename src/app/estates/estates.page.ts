import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estates',
  templateUrl: './estates.page.html',
  styleUrls: ['./estates.page.scss'],
})
export class EstatesPage implements OnInit {
  private locId:string = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.locId = this.activatedRoute.snapshot.paramMap.get('locid');
    alert("locid "+ this.locId);
  }

}
