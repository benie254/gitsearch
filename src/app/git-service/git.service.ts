import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor() { }
}
