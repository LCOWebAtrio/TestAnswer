import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';
import { FlightListComponent } from './components/referencials/flights/list/flight-list.component';
import { FlightFormComponent } from './components/referencials/flights/form/flight-form.component';
import { AircraftListComponent } from './components/referencials/aircrafts/list/aircraft-list.component';
import { AircraftFormComponent } from './components/referencials/aircrafts/form/aircraft-form.component';
import { AirportListComponent } from './components/referencials/airports/list/airport-list.component';
import { AirportFormComponent } from './components/referencials/airports/form/airport-form.component';

/**
 * Defines the application routes.
 */
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'flights',
        component: FlightListComponent,
    },
    {
        path: 'aircrafts',
        component: AircraftListComponent,
    },
    {
        path: 'airports',
        component: AirportListComponent,
    },
    {
        path: 'flight-form',
        component: FlightFormComponent
    },
    {
        path: 'aircraft-form',
        component: AircraftFormComponent
    },
    {
        path: 'airport-form',
        component: AirportFormComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}