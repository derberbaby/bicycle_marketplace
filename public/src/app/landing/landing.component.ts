import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bicycle } from './../bicycle';
import { BicycleService } from './../bicycle.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	user = new User();
	user_login = new User();
	errors = [];
  bicycles: Array<Bicycle>;
  index;

  constructor(private _userService: UserService, private _bicycleService: BicycleService, private _router: Router) { }

  ngOnInit() {
    this._bicycleService.serviceGetBikes()
      .then( (bicycles) => {
         this.bicycles = bicycles;
         this.index = Math.floor(Math.random() * this.bicycles.length);
      })
      .catch( (err) => this.errors = JSON.parse(err._body))
  }

  login() {
  	this._userService.serviceLogin(this.user_login)
  		.then( (success) => {
  			this._router.navigate(['/bicycles'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }

  register() {
  	this._userService.serviceRegister(this.user)
  		.then( (success) => {
  			this._router.navigate(['/bicycles'])
  		})
  		.catch( (err) => {
  			this.errors = JSON.parse(err._body);
  		})
  }


}
