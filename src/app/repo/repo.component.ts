import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GitService } from '../git-service/git.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
