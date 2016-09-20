const CREATIONS: Creation[] = [
  { id: 11, name: 'Dante' },
  { id: 12, name: 'Blake' },
  { id: 13, name: 'Wordsworth' },
  { id: 14, name: 'Shelley' },
  { id: 15, name: 'Byron' },
  { id: 16, name: 'Chaucer' },
  { id: 17, name: 'Kant' },
  { id: 18, name: 'Goethe' },
  { id: 19, name: 'Proust' },
  { id: 20, name: 'Lawrence' }
];

import { Component } from '@angular/core';

export class Creation{
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  creations = CREATIONS;
  title = 'WorldBuilderDB';
  selectedCreation: Creation;
  onSelect(creation: Creation): void {
      this.selectedCreation = creation;
  }
}
