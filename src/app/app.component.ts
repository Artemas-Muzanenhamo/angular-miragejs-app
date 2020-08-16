import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-miragejs-app';
  user: User;

  ngOnInit(): void {
    this.retrieveASingleUser();
  }

  constructor(private appService: AppService) {
  }

  private retrieveASingleUser(): void {
    this.appService.getASingleUser()
      .subscribe(
        response => {
          this.user = response;
        },
        error => console.error('Could not retrieve user from github 😩: ', error)
      );
  }
}
