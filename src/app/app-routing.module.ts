import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { PaisComponent } from './pages/pais/pais.component';

const routes: Routes = [
    {
        path: '',
        component: PaisesComponent
    },
    {
        path: 'pais/:id',
        component: PaisComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule( {
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
} )
export class AppRoutingModule {}
