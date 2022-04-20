import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { GitService } from '../git-service/git.service';
import { ProfileRequestService } from '../profile-request-service/profile-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
