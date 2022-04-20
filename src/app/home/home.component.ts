import { Component, OnInit } from '@angular/core';

import { GitService } from '../git-service/git.service';
import { ProfileRequestService } from '../profile-request-service/profile-request.service';

import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = 'benie254';
  repo: Repo[];
  user: User[];

  values= '';
  isLoading: boolean= false;
  noInput: boolean= true;
  getFetchSuccess: boolean= false;
  NoUser: boolean= false;
  myUser: Repo[];

  errorMessage;

  constructor(private gitService: GitService,private profileRequest: ProfileRequestService) { }

  ngOnInit(): void {
  }

}
