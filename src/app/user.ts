export class User {
  private login: string;
  private id: number;
  private nodeId: string;
  private avatarUrl: string;
  private gravatarId: string;
  private url: string;
  private htmlUrl: string;
  private followersUrl: string;
  private followingUrl: string;
  private gistsUrl: string;
  private starredUrl: string;
  private subscriptionsUrl: string;
  private organizationsUrl: string;
  private reposUrl: string;
  private eventsUrl: string;
  private receivedEventsUrl: string;
  private type: string;
  private siteAdmin: boolean;
  private name: string;
  private company: string;
  private blog: string;
  private location: string;
  private email: string;
  private hireable: string;
  private bio: string;
  private twitterUsername: string;
  private publicRepos: number;
  private publicGists: number;
  private followers: number;
  private following: number;
  private createdAt: string;
  private updatedAt: string;


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
