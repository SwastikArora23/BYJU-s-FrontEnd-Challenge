import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Swastik';

  url = 'https://nut-case.s3.amazonaws.com/jobs.json';

  jLength: any;
  jobs: Object;

  constructor(private http: HttpClient) { }

  getJobs() {
    this.http.get(this.url).subscribe(
      (res) => {
        // console.log(res);
        this.jLength = res['len'];
        this.jobs = res['data'];
        console.log(this.jobs);
      }
    );
  }

  ngOnInit() {
    this.getJobs();
  }

}
