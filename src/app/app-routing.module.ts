import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/login/pages/login/login.component";
import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';

const routes:Routes = [
    {
        path:"",
        redirectTo:'login',
        pathMatch:'full'
    },{
        path:'login',
        component:LoginComponent,
        loadChildren:():Promise<unknown>=> import('@modules/login/login.module').then(m => m.LoginModule)
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}