import {Server} from 'miragejs';
import {User} from './user';
import {Injectable} from '@angular/core';

@Injectable()
export default class GithubMockedService {

  private static users(): User[] {
    return [
      {
        login: 'angular',
        id: 139426,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzOTQyNg==',
        avatar_url: 'https://avatars3.githubusercontent.com/u/139426?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/angular',
        html_url: 'https://github.com/angular',
        followers_url: 'https://api.github.com/users/angular/followers',
        following_url: 'https://api.github.com/users/angular/following{/other_user}',
        gists_url: 'https://api.github.com/users/angular/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/angular/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/angular/subscriptions',
        organizations_url: 'https://api.github.com/users/angular/orgs',
        repos_url: 'https://api.github.com/users/angular/repos',
        events_url: 'https://api.github.com/users/angular/events{/privacy}',
        received_events_url: 'https://api.github.com/users/angular/received_events',
        type: 'Organization',
        site_admin: false,
        name: 'Angular',
        company: null,
        blog: 'https://angular.io',
        location: null,
        email: null,
        hireable: null,
        bio: null,
        twitter_username: null,
        public_repos: 197,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: '2009-10-13T22:16:19Z',
        updated_at: '2019-12-19T20:47:46Z'
      },
      {
        login: 'Pictopage',
        id: 29667107,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjI5NjY3MTA3',
        avatar_url: 'https://avatars2.githubusercontent.com/u/29667107?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Pictopage',
        html_url: 'https://github.com/Pictopage',
        followers_url: 'https://api.github.com/users/Pictopage/followers',
        following_url: 'https://api.github.com/users/Pictopage/following{/other_user}',
        gists_url: 'https://api.github.com/users/Pictopage/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Pictopage/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Pictopage/subscriptions',
        organizations_url: 'https://api.github.com/users/Pictopage/orgs',
        repos_url: 'https://api.github.com/users/Pictopage/repos',
        events_url: 'https://api.github.com/users/Pictopage/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Pictopage/received_events',
        type: 'Organization',
        site_admin: false,
        name: 'Pictopage',
        company: null,
        blog: 'https://www.pictopage.com/',
        location: null,
        email: null,
        hireable: null,
        bio: 'Technology Consultancy',
        twitter_username: null,
        public_repos: 1,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: '2017-06-23T22:19:30Z',
        updated_at: '2018-03-15T19:39:34Z'
      },
      {
        login: 'zw-engineers',
        id: 37745143,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjM3NzQ1MTQz',
        avatar_url: 'https://avatars0.githubusercontent.com/u/37745143?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/zw-engineers',
        html_url: 'https://github.com/zw-engineers',
        followers_url: 'https://api.github.com/users/zw-engineers/followers',
        following_url: 'https://api.github.com/users/zw-engineers/following{/other_user}',
        gists_url: 'https://api.github.com/users/zw-engineers/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/zw-engineers/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/zw-engineers/subscriptions',
        organizations_url: 'https://api.github.com/users/zw-engineers/orgs',
        repos_url: 'https://api.github.com/users/zw-engineers/repos',
        events_url: 'https://api.github.com/users/zw-engineers/events{/privacy}',
        received_events_url: 'https://api.github.com/users/zw-engineers/received_events',
        type: 'Organization',
        site_admin: false,
        name: 'Zimbabwe Software Engineers',
        company: null,
        blog: 'https://www.facebook.com/groups/zwengineers/',
        location: null,
        email: null,
        hireable: null,
        bio: 'This group is to serve as a community for all Zimbabwean Engineers that specialise particularly in the sftware industry.',
        twitter_username: null,
        public_repos: 20,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: '2018-03-24T15:56:42Z',
        updated_at: '2018-09-22T23:22:29Z'
      }
    ];
  }

  private static user(): User {
    return {
      login: 'Artemas-Muzanenhamo',
      id: 29547780,
      node_id: 'MDQ6VXNlcjI5NTQ3Nzgw',
      avatar_url: 'https://avatars0.githubusercontent.com/u/29547780?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Artemas-Muzanenhamo',
      html_url: 'https://github.com/Artemas-Muzanenhamo',
      followers_url: 'https://api.github.com/users/Artemas-Muzanenhamo/followers',
      following_url: 'https://api.github.com/users/Artemas-Muzanenhamo/following{/other_user}',
      gists_url: 'https://api.github.com/users/Artemas-Muzanenhamo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Artemas-Muzanenhamo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Artemas-Muzanenhamo/subscriptions',
      organizations_url: 'https://api.github.com/users/Artemas-Muzanenhamo/orgs',
      repos_url: 'https://api.github.com/users/Artemas-Muzanenhamo/repos',
      events_url: 'https://api.github.com/users/Artemas-Muzanenhamo/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Artemas-Muzanenhamo/received_events',
      type: 'User',
      site_admin: false,
      name: 'Artemas Muzanenhamo',
      company: 'Pictopage',
      blog: 'https://www.linkedin.com/in/artemasmuzanenhamo/',
      location: 'London',
      email: null,
      hireable: null,
      bio: 'Software Engineer',
      twitter_username: null,
      public_repos: 75,
      public_gists: 2,
      followers: 15,
      following: 18,
      created_at: '2017-06-19T15:44:50Z',
      updated_at: '2020-08-15T21:25:50Z'
    };
  }

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
}
