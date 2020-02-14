// import { CountdownModule } from 'ngx-countdown';
import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
// import { CountdownModule } from "moment-countdown";
import "moment-timezone";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  result: any;
  duration: any;
  /*


  moment-countdown@0.0.3


  nowTime = new Date().getTime();
  currentTime = this.nowTime / 1000;

  currentDate = new Date(this.currentTime);

  startTime = new Date("15 February,2020 6:40:15 PM");
  startTime2 = moment("15 February,2020 6:40:15 PM");

  startInSecond = new Date(this.startTime).getTime();
  startTimeInSecond = this.startInSecond / 1000;

  endTime = new Date("17 February,2020 09:20:40 AM GMT+06:00");
  endInSecond = new Date(this.endTime).getTime();
  endTimeInSecond = this.endInSecond / 1000;

  ngOnInit() {
    console.log("startTime ->", this.startTime);
    console.log("endTime ->", this.endTime);

    console.log("-------------");

    console.log("currentTime ->", this.currentDate);
    console.log("currentTime ->", this.currentTime);
    console.log("startTimeInSecond ->", this.startTimeInSecond);
    console.log("endTimeInSecond ->", this.endTimeInSecond);

    console.log("-------------");
    console.log(this.startTime2);
  }
 

  ngOnInit() {
    /*
    const startTime1 = moment("15 February,2020 6:40:15 PM");
    const startTime2 = moment("17 February,2020 9:40:15 PM");

    this.result = startTime2.diff(startTime1);

    console.log("second = ", this.result);

    var duration = moment.duration(this.result, "seconds");
    console.log(duration._milliseconds);
    // var formatted = duration.for
    // .format("hh:mm:ss");
    console.log(duration);

    // // try to create date from second
    // const difrentInDate = moment.utc(result).format("dd MMMM , yyyy hh:mm:ss");
    // console.log(difrentInDate);
    
    var eventTime = 1581891568000; // Timestamp - Sun, 21 Apr 2013 13:00:00 GMT
    var currentTime = 1581718768000; // Timestamp - Sun, 21 Apr 2013 12:30:00 GMT
    var diffTime = eventTime - currentTime;
    this.duration = moment.duration(diffTime * 1000, "milliseconds");
    var interval = 1000;

    setInterval(() => {
      this.duration = moment.duration(this.duration - interval, "milliseconds");
      // console.log(this.duration.days());
      console.log(this.duration.hours());
      console.log(
        `${this.duration.hours()} + ":" + ${this.duration.minutes()}+ ":" + ${this.duration.seconds()}`
      );
      // console.log(this.duration.minutes());
      // console.log(this.duration.seconds());
      // console.log(this.duration.hours());
    }, interval);
  }
   */
  ngOnInit() {
    const eventTime = moment("2020-02-14T11:00:00");
    // eventTime.tz()
    // const eventTime2 = moment.normalizeUnits("2020-02-14T11:00:00").tz();
  }
}
