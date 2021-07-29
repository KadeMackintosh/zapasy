import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../../data/events';
import { Odds } from '../../data/odds';
import { Labels } from '../../data/labels';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  constructor(private http: HttpClient) {
  }

  urlEvent: string = "http://localhost:3000/EventChanceTypes";
  getEvents(){
    return this.http.get<Events[]>(this.urlEvent);
  }

  //PS: dočítal som sa, že nie je rozumné returnovať funkciu. Som si vedomý tejto chyby
  urlOdds: string = "http://localhost:3000/Odds";
  getOdds(){
    return this.http.get<Odds[]>(this.urlOdds);
  }

  urlLabel: string = "http://localhost:3000/Labels";
  getLabels(){

    return this.http.get<Labels[]>(this.urlLabel);
  }


}
