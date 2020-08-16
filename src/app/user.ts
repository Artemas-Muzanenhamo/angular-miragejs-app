export class User {
  public login: string;
  public id: number;
  public nodeId: string;
  public avatarUrl: string;
  public gravatarId: string;
  public url: string;
  public htmlUrl: string;
  public followersUrl: string;
  public followingUrl: string;
  public gistsUrl: string;
  public starredUrl: string;
  public subscriptionsUrl: string;
  public organizationsUrl: string;
  public reposUrl: string;
  public eventsUrl: string;
  public receivedEventsUrl: string;
  public type: string;
  public siteAdmin: boolean;
  public name: string;
  public company: string;
  public blog: string;
  public location: string;
  public email: string;
  public hireable: string;
  public bio: string;
  public twitterUsername: string;
  public publicRepos: number;
  public publicGists: number;
  public followers: number;
  public following: number;
  public createdAt: string;
  public updatedAt: string;

  constructor(login: string, id: number, nodeId: string, avatarUrl: string, gravatarId: string, url: string, htmlUrl: string,
              followersUrl: string, followingUrl: string, gistsUrl: string, starredUrl: string, subscriptionsUrl: string,
              organizationsUrl: string, reposUrl: string, eventsUrl: string, receivedEventsUrl: string, type: string, siteAdmin: boolean,
              name: string, company: string, blog: string, location: string, email: string, hireable: string, bio: string,
              twitterUsername: string, publicRepos: number, publicGists: number, followers: number, following: number, createdAt: string,
              updatedAt: string) {
    this.login = login;
    this.id = id;
    this.nodeId = nodeId;
    this.avatarUrl = avatarUrl;
    this.gravatarId = gravatarId;
    this.url = url;
    this.htmlUrl = htmlUrl;
    this.followersUrl = followersUrl;
    this.followingUrl = followingUrl;
    this.gistsUrl = gistsUrl;
    this.starredUrl = starredUrl;
    this.subscriptionsUrl = subscriptionsUrl;
    this.organizationsUrl = organizationsUrl;
    this.reposUrl = reposUrl;
    this.eventsUrl = eventsUrl;
    this.receivedEventsUrl = receivedEventsUrl;
    this.type = type;
    this.siteAdmin = siteAdmin;
    this.name = name;
    this.company = company;
    this.blog = blog;
    this.location = location;
    this.email = email;
    this.hireable = hireable;
    this.bio = bio;
    this.twitterUsername = twitterUsername;
    this.publicRepos = publicRepos;
    this.publicGists = publicGists;
    this.followers = followers;
    this.following = following;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
