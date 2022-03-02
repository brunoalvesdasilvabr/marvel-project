import { Component, OnInit } from '@angular/core';
import { HomeService } from '@modules/home/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this.homeService.getHeroes().subscribe((res)=>{
      console.log(res)
    })
  }
}
