import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../login/guards/auth.guard";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard], 
        children: [
            {
                path: 'home',
                loadChildren: ()=> import('./views/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'products',
                loadChildren: ()=> import('./views/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }