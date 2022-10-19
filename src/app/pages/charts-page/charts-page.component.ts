import { Component, OnInit } from '@angular/core';
import { albums } from 'src/app/Modules/albums';
import { topAlbums } from '../../Modules/TopAlbum';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.css'],
})
export class ChartsPageComponent implements OnInit {
  topAlbums: albums[] = topAlbums;

  constructor() {}

  ngOnInit(): void {}
}
