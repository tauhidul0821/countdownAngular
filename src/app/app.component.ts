// import { CountdownModule } from 'ngx-countdown';
import { Component, OnInit, OnDestroy } from "@angular/core";
// import * as moment from "moment";
// import { CountdownModule } from "moment-countdown";
import * as moment from "moment-timezone";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  result: any;
  duration: any;
  intervalId: any;
  nextchallengeString: any;

  ngOnInit() {
    this.setInnnnFun();
  }
  ngOnDestroy() {}
  clrtime() {
    console.log("i am click");
    clearInterval(this.intervalId);
  }
  setInnnnFun() {
    const currentTime = moment().tz("Asia/Dhaka");
    const eventTime2 = moment("21 Feb 2020 22:48:24").tz("Asia/Dhaka");
    // this.intervalId = setInterval(() => {
    //   console.log("hi");
    // }, 1000);

    if (eventTime2 > currentTime) {
      this.duration = moment.duration(eventTime2.diff(currentTime));
      this.intervalId = setInterval(() => {
        this.duration = moment.duration(this.duration - 1000, "milliseconds");
        console.log("duration ->", this.duration);

        this.nextchallengeString = `${this.duration.years()} years ${this.duration.days()} days ${this.duration.hours()} hours ${this.duration.minutes()} minutes ${this.duration.seconds()} second`;
      }, 1000);
    }
    console.log("this challenge expire ");
  }
}
