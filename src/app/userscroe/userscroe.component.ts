import { Component, OnInit } from '@angular/core';
import { GithubScoreService } from './../github-score.service';
@Component({
  selector: 'app-userscroe',
  templateUrl: './userscroe.component.html',
  styleUrls: ['./userscroe.component.css'],
  
})
export class UserscroeComponent implements OnInit {
  username: string;
  message;
  constructor(private _githubscoreservice: GithubScoreService) {
    
   }
  calculate() {
    this._githubscoreservice.getusername(this.username,(userinfo)=>{
      this.message = userinfo;
    });
    
  }
  ngOnInit() {
  }

}
