import { Component, Input, OnInit } from '@angular/core';
import { topAlbums } from '../../Modules/topAlbums';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css'],
})
export class TopCardComponent implements OnInit {
  @Input()
  album!: topAlbums;

  toggle: boolean = false;
  val: string = 'none';

  constructor() {}

  ngOnInit(): void {}

  ontoggle() {
    this.toggle = !this.toggle;
    this.val = this.toggle ? '#FACD66' : 'none';
  }
}
