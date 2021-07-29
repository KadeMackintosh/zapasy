import { Component, OnInit } from '@angular/core';
import { Events } from '../../../data/events';
import { Labels } from '../../../data/labels';
import { Odds } from '../../../data/odds';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(public rs: RestService) { }

  events:Events[] = [];
  labels:Labels[] = [];
  odds:Odds[] = [];

  ngOnInit(): void {
    this.rs.getEvents().subscribe((response :any) => {
      this.events = response;
    })

    this.rs.getLabels().subscribe((response : any) => {
      this.labels = response;
    })

    this.rs.getOdds().subscribe((response : any) => {
      this.odds = response;
    })
  }

}
