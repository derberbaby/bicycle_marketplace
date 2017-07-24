import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class BicycleService {

  constructor(private _http: Http) { }

  serviceGetBikes() {
  	return this._http.get('/api/bikes')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceCreateBike(bicycle) {
  	return this._http.post('/api/create', bicycle)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceGetUserBikes() {
  	return this._http.get('/api/user_bikes')
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceUpdateBike(bike) {
  	return this._http.put('/api/update/' + bike._id, bike)
  		.map( (response) => response.json())
  		.toPromise()
  }

  serviceDeleteBike(bike) {
  	return this._http.delete('/api/delete/' + bike._id, bike)
  		.map( (response) => response.json())
  		.toPromise()
  }

}
