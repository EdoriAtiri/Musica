import { Component, Input, OnInit } from '@angular/core';
import { albums } from '../../Modules/albums';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css'],
})
export class ChartCardComponent implements OnInit {
  @Input()
  album!: albums;

  constructor() {}

  ngOnInit(): void {}
}
