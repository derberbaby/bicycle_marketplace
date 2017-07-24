import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BicycleService } from './bicycle.service'
import { UserService } from './user.service'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BicyclesComponent } from './bicycles/bicycles.component';
import { BicyclesBrowseComponent } from './bicycles/bicycles-browse/bicycles-browse.component';
import { BicyclesListingsComponent } from './bicycles/bicycles-listings/bicycles-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BicyclesComponent,
    BicyclesBrowseComponent,
    BicyclesListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BicycleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
