import { Component, Input, OnInit } from '@angular/core';
import { albums } from 'src/app/Modules/albums';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
})
export class AlbumCardComponent implements OnInit {
  @Input()
  newRelease!: albums;
  constructor() {}

  ngOnInit(): void {}
}
