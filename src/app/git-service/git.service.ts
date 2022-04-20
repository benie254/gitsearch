import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Repo } from '../repo-class/repo';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  baseURL:string= 'https://api.github.com';

  constructor(private http: HttpClient) { }

  gitRepos(userName: string): Observable<Repo[]>{
    return this.http.get<Repo[]>(this.baseURL + '/users/' + userName + '/repos');
  }
}
