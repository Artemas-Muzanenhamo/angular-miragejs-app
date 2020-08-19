# Angular MirageJs App

* This app will demonstrate how to use Angular with MirageJs retuning mocked
responses. There are some instances when you need to implement your UI/front-end
and your back-end or the API you wish to consume is not yet ready. MirageJS gives you
a way to have mocked responses on an API you may wish to call with your front-end
meaning that you can implement your front-end without having to wait for your back-end
to be done.

## The Idea
For this application I pretended to be one of the front-end devs at [Github](https://github.com/).
I have been tasked with implementing the UI to show public Github users 
information. The problem is that the back-end devs have been having too much 
coffee ☕️ and haven't implemented the API on the back-end. Luckily, I found....
MirageJS !!!!! 💪🏾😁

## Start the application

Start the application by executing the following in a terminal under the same directory:
* `ng serve -o`

## How to add MirageJs to Angular

### The MirageJs Server

* `npm install --save-dev miragejs`
* Create a MirageJs server service e.g. `GithubMockedService`
* Define a Server in your service:
```typescript
public mirageJsServer(): Server {
    return new Server({
      routes(): void {
        this.namespace = 'api';

        this.get('/users', () => {
          return GithubMockedService.users();
        });

        this.get('/users/artemas-muzanenhamo', () => {
          return GithubMockedService.user();
        });
      },
    });
}
```
* The `GithubMockedService.users()` in my case is the mocked data I wish to return
when the `/users` endpoint is requested.

### The App Module

You will need to add the service e.g. `GithubMockedService` to the application module
`app.module.ts` as part of the `providers`.

```typescript
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
```

### The App Service

Now you are ready to create your application calling those endpoints and you will receive your
mocked responses.

Create a real service that you will expect to call a real endpoint 
e.g. `AppService` aka `app.service.ts`.

* Implement your service to call your mocked APIs:

```typescript
@Injectable()
export class AppService {
  private httpClient: HttpClient;
  private url = '/api/users';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getASingleUser(): Observable<User> {
    return this.httpClient.get<User>(this.url + '/artemas-muzanenhamo'); // <-- to call /api/users/artemas-muzanenhamo
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url); // <-- to call /api/users
  }
}
```
* Do not forget to add your new service to the AppModule :smirk:

### The App Component

Now in the `AppComponent` aka the `app.component.ts` we inject our services. This is where
everything starts to come together.

* Create a constructor to pass in our services:
```typescript
  constructor(
    private appService: AppService,
    private githubMockedService: GithubMockedService
  ) {}
```

* Make the `AppComponent` class implement the `OnInit` interface:
```typescript
export class AppComponent implements OnInit {
    ngOnInit(): void {
        // This Initialises the component after Angular first displays 
        // the data-bound properties and sets the directive or component's input properties.
    }
}
```

* Add MirageJs server in the `ngOnInit()`
```typescript
  ngOnInit(): void {
    this.githubMockedService.mirageJsServer();
  }
```
Now whenever our component is ready, `MirageJs Server` will also be ready to recieve request and respond
with our mocked responses.

* Call your service/services in your controller

```typescript
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
```

In this example I needed the data to be ready when being rendered intially so
I had to call these methods as part of the `ngOnInit()` which all ends up looking like:

```typescript
  ngOnInit(): void {
    this.githubMockedService.mirageJsServer();
    this.retrieveASingleUser();
    this.getMovies();
  }
```

For more on MirageJS please check out the documentation [here](https://miragejs.com/docs/getting-started/introduction/).
