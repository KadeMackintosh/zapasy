import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Events } from '../../../data/events';
import { Labels } from '../../../data/labels';
import { Odds } from '../../../data/odds';

@Component({
  selector: 'app-seperate-tables',
  templateUrl: './seperate-tables.component.html',
  styleUrls: ['./seperate-tables.component.scss']
})
export class SeperateTablesComponent implements OnInit {

  events:Events[] = [];
  labels:Labels[] = [];
  odds: Odds[] = [];
  leagueID:number;
  showOrNot: boolean = true;
  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getEvents().subscribe((response:any) => {
      this.events = response;
    })

    this.rs.getLabels().subscribe((response :any) => {
      this.labels = response;
    })

    this.rs.getOdds().subscribe((response :any) => {
      this.odds = response;
    })
  }

  counter:number = 0;

  filterEvents(key:number){


    if(this.counter++ %2 == 0){
      this.leagueID = key;
    }else{
      this.leagueID = null;
    }
  }
}
