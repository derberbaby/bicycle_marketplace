import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BicyclesComponent } from './bicycles/bicycles.component';
import { BicyclesBrowseComponent } from './bicycles/bicycles-browse/bicycles-browse.component';
import { BicyclesListingsComponent } from './bicycles/bicycles-listings/bicycles-listings.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'landing' },
  // { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'bicycles', component: BicyclesComponent, children: [
  	{ path: '', component: BicyclesBrowseComponent },
	{ path: 'browse', component: BicyclesBrowseComponent },
	{ path: 'listings', component: BicyclesListingsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
