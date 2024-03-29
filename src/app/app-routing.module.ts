import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/login/pages/login/login.component";

import { LayoutComponent } from "@modules/layout/components/layout/layout.component";
import { AuthGuard } from "./core/guards/auth/auth.guard";
import { LoginGuard } from "./core/guards/login/login.guard";

const routes:Routes = [
    {
        path:"",
        redirectTo:'login',
        pathMatch:'full'
    },{
        path:'login',
        canActivate:[LoginGuard],
        component:LoginComponent,
        loadChildren:():Promise<unknown>=> import('@modules/login/login.module').then(m => m.LoginModule)
    },{
        path:'home',
        canActivate:[AuthGuard],
        component:LayoutComponent,
        loadChildren:():Promise<unknown>=> import('@modules/home/home.module').then(m => m.HomeModule)
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}