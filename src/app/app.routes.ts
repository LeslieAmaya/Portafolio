import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MiComponent } from './mi/mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path:'inicio', component: PrincipalComponent},
    {path:'mi', component: MiComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'proyectos', component:ProyectosComponent},
    {path:'nav', component:NavComponent}
];
