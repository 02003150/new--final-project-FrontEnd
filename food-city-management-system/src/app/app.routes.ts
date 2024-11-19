import { Routes } from '@angular/router';
import path from 'path';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageFormComponent } from './home-page-form/home-page-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { OderFormComponent } from './oder-form/oder-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ManageUsersFormComponent } from './manage-users-form/manage-users-form.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginFormComponent
    },
    {
        path: "dash-board",
        component: DashBoardComponent,
        children: [
            {
                path: "",
                component: HomePageFormComponent
            },
            {
                path: "user-form",
                component: UserFormComponent,
            },
            {
                path: 'manage-users-form',
                component: ManageUsersFormComponent
            },
            {
                path: 'supplier-form',
                component: SupplierFormComponent
            },
            {
                path: 'oder-form',
                component: OderFormComponent
            },
            {
                path: 'customer-form',
                component: CustomerFormComponent
            },
            {
                path: 'product-form',
                component: ProductFormComponent
            },
            {
                path: 'location-page',
                component: LocationPageComponent
            },
            {
                path: 'about-page',
                component: AboutPageComponent
            },

            {
                path: 'add-product-form',
                component: AddProductFormComponent
            }

        ]

    },

];



