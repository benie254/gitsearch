import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-service/git.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  values= '';
  isLoading: boolean= false;
  noInput: boolean= true;
  getFetchSuccess: boolean= false;
  NoUser: boolean= false;

  myUser: Repo[];

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
  }

  onKey(event: any){
    this.values= event.target.value;
    this.getFetchSuccess= false;
    this.NoUser= false;
    if (this.values == ''){
      this.noInput = true;
    } else {
      this.noInput = false;
    }
  }

  search(userName: string): void{
    this.getFetchSuccess= false;
    this.NoUser= false;
    userName= this.values.trim();
    if (!userName) { return; }
    this.gitService.gitRepos(userName);
    this.isLoading= true;
    this.fetchUser(userName);
  }

  fetchUser(UserName): void{
    this.gitService.gitRepos(UserName).subscribe( data =>{
      this.myUser= data;
      if (this.myUser == undefined || this.myUser && this.myUser.length == 0){
        this.NoUser= true;
      } else {
        this.NoUser= false;
      };
    });

}
