import { Component, Input, OnInit } from '@angular/core';
import { collections } from 'src/app/Modules/collections';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css'],
})
export class CollectionCardComponent implements OnInit {
  @Input()
  collections!: collections;

  constructor() {}

  ngOnInit(): void {}
}
