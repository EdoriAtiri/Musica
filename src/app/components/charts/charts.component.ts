import { Component, OnInit } from '@angular/core';
import { albums } from '../../Modules/albums';
import { topAlbums } from '../../Modules/TopAlbum';
import { newReleases } from '../../Modules/newReleases';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  toggle: boolean = false;
  val: string = 'none';
  topAlbums: albums[] = topAlbums;
  newReleases: albums[] = newReleases;

  constructor() {}

  ngOnInit(): void {}

  ontoggle() {
    this.toggle = !this.toggle;
    this.val = this.toggle ? '#FACD66' : 'none';
  }
}
