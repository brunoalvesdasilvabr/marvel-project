import { Component, OnInit } from '@angular/core';
import { HomeService } from '@modules/home/services/home.service';
import { HeroesListInterface } from 'src/app/data/interface/heroes.interface';

@Component({
  selector: 'app-characthers',
  templateUrl: './characthers.component.html',
  styleUrls: ['./characthers.component.scss']
})
export class CharacthersComponent implements OnInit {
loading = true;
  heroesList!:HeroesListInterface[]
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.homeService.getHeroes().subscribe((res)=>{
      this.heroesList =  res.data.results;
      this.loading = false;
    })
  }
}


