import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import GithubMockedService from './github.mocked.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    GithubMockedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
