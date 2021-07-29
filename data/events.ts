export class Events{

  EventID:number;
  EventDate:Date;
  EventName:string;
  EventChanceTypeID:number;
  LeagueCupID:number;
  SportID: number;
  RegionID: number;


  constructor(EventID:number, EventDate:Date, EventName:string, EventChanceTypeID:number, LeagueCupID:number,  SportID: number,
    RegionID: number){
    this.EventID=EventID;
    this.EventDate=EventDate;
    this.EventName=EventName;
    this.EventChanceTypeID=EventChanceTypeID;
    this.LeagueCupID = LeagueCupID;
    this.SportID = SportID;
    this.RegionID = RegionID;
  }


}
