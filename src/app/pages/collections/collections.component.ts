import { Component, OnInit } from '@angular/core';
import { myCollection } from 'src/app/Modules/myCollection';
import { collections } from 'src/app/Modules/collections';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  collections: collections[] = myCollection;

  constructor() {}

  ngOnInit(): void {}
}
