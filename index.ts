export class MicrosubClient {
  endpoint: string
  token: string

  constructor (endpoint, token) {
    this.endpoint = endpoint
    this.token = token

    // this.followers = this.followers.bind(this)
    // this.follow = this.follow.bind(this)
  }
}
