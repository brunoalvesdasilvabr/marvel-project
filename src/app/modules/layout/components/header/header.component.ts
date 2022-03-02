import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StorageKeys } from 'src/app/core/constants/storageKeys.enum';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isRoute = {
    characthers: false,
    favorites: false,
  };
  constructor(private storageService: StorageService, private router: Router) {}
  ngOnInit(): void {
    const path = this.router.url.split("/")[2]
    this.activeHeaderItem(path);
  }

  activeHeaderItem(routePath:string) {
   switch (routePath) {
       case 'characthers':
           console.log('okkk')
        this.isRoute.favorites = false;
           this.isRoute.characthers = true;
           break;
       case 'favorites':
        this.isRoute.characthers = false;
        this.isRoute.favorites = true;
           break;
   
       default:
           break;
   }
  }
  logout() {
    this.storageService.remove(StorageKeys.token);
    this.router.navigate(['/login']);
  }
  navigateToRoute(path:string){
      this.router.navigateByUrl(`home/${path}`)
this.activeHeaderItem(path)
  }
}
