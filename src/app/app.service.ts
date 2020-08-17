import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from './user';

@Injectable()
export class AppService {
  private httpClient: HttpClient;
  private url = '/api/users';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getASingleUser(): Observable<User> {
    return this.httpClient.get<User>(this.url + '/artemas-muzanenhamo');
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
