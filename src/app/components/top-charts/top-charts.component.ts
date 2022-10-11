import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css'],
})
export class TopChartsComponent implements OnInit {
  toggle: boolean = false;
  val: string = 'none';
  constructor() {}

  ngOnInit(): void {}

  ontoggle() {
    this.toggle = !this.toggle;
    this.val = this.toggle ? '#FACD66' : 'none';
  }
}
