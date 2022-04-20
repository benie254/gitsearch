import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() passData;
  arrayData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
