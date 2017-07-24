import { Component, OnInit } from '@angular/core';
import { Bicycle } from './../../bicycle';
import { BicycleService } from './../../bicycle.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bicycles-listings',
  templateUrl: './bicycles-listings.component.html',
  styleUrls: ['./bicycles-listings.component.css']
})
export class BicyclesListingsComponent implements OnInit {

	bicycle = new Bicycle();
	user_bicycles: Array<Bicycle>;
	bike: Bicycle;
	errors = [];

  constructor(private _bicycleService: BicycleService, private _router: Router) { }

  ngOnInit() {
  	this.getUserBikes();
  }

  addBike() {
  	this._bicycleService.serviceCreateBike(this.bicycle)
  		.then( (success) => {
  			this.getUserBikes();
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  		this.bicycle = new Bicycle();
  }

  getUserBikes() {
  	this._bicycleService.serviceGetUserBikes()
  		.then( (bicycles) => {
  			this.user_bicycles = bicycles;
  		})
  		.catch( (err) => this.errors = JSON.parse(err._body))
  }

  updateBike(bike) {
  	this._bicycleService.serviceUpdateBike(bike)
  		.then( (success) => {
  			this.getUserBikes();
  		})
  		.catch( (err) => this.errors = JSON.parse(err._body))
  }

  deleteBike(bike) {
  	this._bicycleService.serviceDeleteBike(bike)
  		.then( (success) => {
  			this.getUserBikes();
  		})
  		.catch( (err) => this.errors = JSON.parse(err._body))
  }

}
