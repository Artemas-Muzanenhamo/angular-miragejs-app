import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {User} from './user';
import GithubMockedService from './github.mocked.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-miragejs-app';
  user: User;
  users: User[];

  ngOnInit(): void {
    this.exampleClass.mockServer();
    this.retrieveASingleUser();
    this.getMovies();
  }

  constructor(
    private appService: AppService,
    private exampleClass: GithubMockedService
  ) {}

  private retrieveASingleUser(): void {
    this.appService.getASingleUser()
      .subscribe(
        response => this.user = response,
        error => console.error('Could not retrieve user from github 😩: ', error)
      );
  }

  private getMovies(): void {
    this.appService.getAllUsers()
      .subscribe(
        response => this.users = response,
        error => console.error('Could not retrieve users from github 😢: ', error)
      );
  }
}
