import { Component, OnInit } from '@angular/core';
import { topAlbums } from '../../Modules/topAlbums';

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css'],
})
export class TopChartsComponent implements OnInit {
  toggle: boolean = false;
  val: string = 'none';

  topAlbums: topAlbums[] = [
    {
      title: 'Golden age of 80s',
      artist: 'Sean Swadder',
      length: '2:34:45',
    },
    {
      title: 'Reggae “n” blues',
      artist: 'Dj YK mule',
      length: '1:02:42',
    },
    {
      title: 'Tomorrow’s tunes',
      artist: 'Obi Datti',
      length: '2:01:25',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ontoggle() {
    this.toggle = !this.toggle;
    this.val = this.toggle ? '#FACD66' : 'none';
  }
}
