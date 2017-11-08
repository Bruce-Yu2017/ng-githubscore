import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubScoreService } from './github-score.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserscroeComponent } from './userscroe/userscroe.component';

@NgModule({
  declarations: [
    AppComponent,
    UserscroeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
