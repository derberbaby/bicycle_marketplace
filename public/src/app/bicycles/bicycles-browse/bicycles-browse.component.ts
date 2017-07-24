import { Component, OnInit } from '@angular/core';
import { Bicycle } from './../../bicycle';
import { BicycleService } from './../../bicycle.service';
import { User } from './../../user';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-bicycles-browse',
  templateUrl: './bicycles-browse.component.html',
  styleUrls: ['./bicycles-browse.component.css']
})
export class BicyclesBrowseComponent implements OnInit {

	bicycles: Array<any>;
  user;
  errors = [];
  show = [];
  bike_owner;

  constructor(private _bicycleService: BicycleService, private _userService: UserService) { }

  ngOnInit() {   
    this._userService.serviceCheckSessionUser()
      .then( (user) => {
        this.user = user;
      })
      .catch( (err) => this.errors = JSON.parse(err._body))

    this.getBikes();
  }

  getBikes() {
  	this._bicycleService.serviceGetBikes()
  		.then( (bicycles) => {
        this.bicycles = bicycles;
        for(let i = 0; i < this.bicycles.length; i++) {
          this.show.push(true);
        };
      })
  		.catch( (err) => this.errors = JSON.parse(err._body));
  }

  deleteBike(bike) {
    this._bicycleService.serviceDeleteBike(bike)
      .then( (success) => {
        this.getBikes();
      })
      .catch( (err) => this.errors = JSON.parse(err._body));
  }

  showContact(bike_userid, idx) {
    this.show[idx] = false;
    this._userService.serviceFindBikeOwner(bike_userid)
      .then( (bike_owner) => {
        this.bike_owner = bike_owner;
      })
      .catch( (err) => this.errors = JSON.parse(err._body));
  }

}
