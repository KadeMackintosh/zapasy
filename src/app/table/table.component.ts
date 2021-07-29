import { Component, OnInit } from '@angular/core';
import { Events } from '../../../data/events';
import { Labels } from '../../../data/labels';
import { Odds } from '../../../data/odds';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  events: Events[] = [];
  labels: Labels[] = [];
  odds: Odds[] = [];
  eventName: string = "";
  p: number = 1;
  constructor(public rs: RestService) { }

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


  Search() {
    if (this.eventName == "") {
      this.ngOnInit();
    } else {
      this.events = this.events.filter(res => {
        return res.EventName.toLocaleLowerCase().match(this.eventName.toLocaleLowerCase());
      })
    }
  }

  key = 'EventName';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
