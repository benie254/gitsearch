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

}
