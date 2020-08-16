import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from './user';

@Injectable()
export class AppService {
  private httpClient: HttpClient;
  private url = 'https://api.github.com/users/artemas-muzanenhamo';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getASingleUser(): Observable<User> {
    return this.httpClient.get<User>(this.url);
  }
}
