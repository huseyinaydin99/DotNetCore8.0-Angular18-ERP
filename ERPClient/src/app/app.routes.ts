import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';
import { DepotsComponent } from './components/depots/depots.component';
import { ProductsComponent } from './components/products/products.component';
import { RecipesComponent } from './components/recipes/recipes.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: LayoutsComponent,
        canActivateChild: [()=> inject(AuthService).isAuthenticated()],
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "customers",
                component: HomeComponent
            },
            {
                path: "depots",
                component: DepotsComponent
            },
            {
                path: "products",
                component: ProductsComponent
            },
            {
                path: "recipes",
                component: RecipesComponent
            }
        ]
    }
];
