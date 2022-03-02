import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CharacthersComponent } from "./pages/characthers/characthers.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";

const routes:Routes = [
    {
        path:"",
        redirectTo:'characthers',
        pathMatch:'full'
    },{
        path:'characthers',
        component:CharacthersComponent,
        loadChildren:():Promise<unknown>=> import('@modules/home/pages/characthers/characters.module').then(m => m.CharacthersModule)
    },{
        path:'favorites',
        component:FavoritesComponent,
        loadChildren:():Promise<unknown>=> import('@modules/home/pages/favorites/favorites.module').then(m => m.FavoritesModule)
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule{}