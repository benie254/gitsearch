import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  fromURL= environment.fromURL;

  constructor(private http: HttpClient) { }

  gitUser(userName: string): Observable<User[]>{
    return this.http.get<User[]>(this.fromURL + '/users/' + userName);
  }
}
