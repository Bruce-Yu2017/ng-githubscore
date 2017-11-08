import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class GithubScoreService {
  url = "https://api.github.com/users/";
  userInfo;
  score;
  errorMessage;
  constructor(private _http: Http) { }

  getusername(name, callback) {
    this.url = this.url + name;
    this.retrieveScore(this.url,callback);
    this.url = "https://api.github.com/users/";
  }

  retrieveScore(url, callback) {
    this._http.get(url).subscribe(
      (response) => {
        this.userInfo = response.json();
        this.score = this.userInfo.public_repos + this.userInfo.followers;
        callback(this.score);
      },
      (error)=> {
        console.log(error);
        this.errorMessage = "User does not exist, pick a different username."
        callback(this.errorMessage)
      }
    )
  }
}
