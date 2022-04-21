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

  constructor(private gitService: GitService,private profileRequest: ProfileRequestService) {
    
   }

  gitRepos(event: any){
    let promise= new Promise((resolve, reject) =>{
      this.gitService.gitRepos(this.userName).toPromise().then(response =>{
        this.repo= response;
        resolve('');
      },
      err =>{
        this.errorMessage= 'An error was encountered';
      });
    });
    return promise;
  }

  gitUser(event: any){
    let promise= new Promise((resolve, reject) =>{
      this.profileRequest.gitUser(this.userName).toPromise().then(response =>{
        this.user= response;
        // this.user.bio= response.bio;
	      // this.user.avatar_url=response.avatar_url;
        resolve('');
      },
      err =>{
        this.errorMessage= 'An error was encountered';
      });
    });
    return promise;
  }

  ngOnInit(): void {
  }

}
