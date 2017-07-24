import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent implements OnInit {

	user;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  	this._userService.serviceCheckSessionUser()
  		.then( (user) => {
  			this.user = user;
  		})
  		.catch( (err) => {
  			this._router.navigate([''])
  		})
  }

  logout() {
  	this._userService.serviceLogout()
  		.then( (success) => {
  			this._router.navigate([''])
  		})
  		.catch()
  	}

}
