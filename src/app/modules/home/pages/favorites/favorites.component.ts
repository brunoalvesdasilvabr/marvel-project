import { Component, OnInit } from '@angular/core';
import { HeroesListInterface } from 'src/app/data/interface/heroes.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  
}
