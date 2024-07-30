import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnedData } from '../interfaces/returned-data';
import { map } from 'rxjs';

@Injectable(

)
export class UsersService {

  constructor(private  http: HttpClient) { }
  
  initUsers = ()=> this.http.get<ReturnedData>('https://reqres.in/api/users').pipe(
    map((obj:ReturnedData)=> obj.data));
}
