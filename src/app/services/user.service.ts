import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserToRegister } from '../models/user.model';
import { ApiService } from '../variables/server';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private apiServer: ApiService) { }

  public createUser(user: UserToRegister) {
    return this.httpClient.post(`${this.apiServer.API_SERVER}/users`, user)
  }
}
