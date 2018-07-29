import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ClockComponent implements OnInit {

  secondRadius: number;
  minuteRadius: number;
  hourRadius: number;
  radius = 6;
  clockSecondsForMinute = 60;
  startAngle = -90;

  numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  marks = new Array(60);

  constructor() { }

  ngOnInit() {
    this.calcCurrentTimeAngles();
  }

  calcCurrentTimeAngles() {
    let currentTime = new Date();
    this.secondRadius = currentTime.getSeconds() * this.radius + this.startAngle;
    this.minuteRadius = currentTime.getMinutes() * this.radius + (this.radius / this.clockSecondsForMinute * currentTime.getSeconds()) + this.startAngle;
    this.hourRadius = currentTime.getHours() * this.radius * 5 + (0.5 * currentTime.getMinutes()) + this.startAngle;

    setInterval(() => {
      this.secondRadius += this.radius;
      this.minuteRadius += this.radius / this.clockSecondsForMinute;
    }, 1000);

    setInterval(() => {
      this.hourRadius += 0.5; // (30 * 60) / 3600
    }, 60000);
  }

}
