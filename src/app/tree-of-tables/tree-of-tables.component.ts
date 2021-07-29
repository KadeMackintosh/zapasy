import { Component, OnInit } from '@angular/core';
import { Events } from '../../../data/events';
import { Labels } from '../../../data/labels';
import { Odds } from '../../../data/odds';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tree-of-tables',
  templateUrl: './tree-of-tables.component.html',
  styleUrls: ['./tree-of-tables.component.scss']
})
export class TreeOfTablesComponent implements OnInit {


  events:Events[] = [];
  labels:Labels[] = [];
  odds: Odds[] = [];

  regionIsVisible:boolean = false;
  leagueIsVisible:boolean = false;
  eventIsVisible:boolean = false;
  oddsAreVisible:boolean = false;

  sportValue:any = "";
  regionValue:any = "";
  leagueValue:any = "";
  eventValue:any = "";

  selectedSportName:string = ""; //tieto atribúty sú len ako breadcrumb path..
  selectedRegionName:string = "";
  selectedLeagueName:string = "";
  selectedEventName:string = "";

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

  doSports(key:any, data:string){
    this.regionIsVisible =!this.regionIsVisible;
    this.leagueIsVisible = false;
    this.eventIsVisible = false;
    this.oddsAreVisible = false;
    this.selectedSportName=data;
    this.sportValue = key;
  }

  doRegions(key:any, data:string){
    this.leagueIsVisible = !this.leagueIsVisible;
    this.eventIsVisible = false;
    this.oddsAreVisible = false;
    this.regionValue = key;
    this.selectedRegionName= data;

  }

  doLeagues(key:any, data:string){
    this.eventIsVisible = !this.eventIsVisible;
    this.leagueValue = key;

    this.selectedLeagueName=data;


  }

  doEvents(key:any, data:string){
    this.oddsAreVisible = !this.oddsAreVisible;
    this.eventValue = key;

    this.selectedEventName= data;



  }

}
