const Jira = require('./common/net/Jira')

module.exports = class {
  constructor ({ githubEvent, argv, config }) {
    this.Jira = new Jira({
      baseUrl: config.baseUrl,
      token: config.token,
      email: config.email,
    })

    this.config = config
    this.argv = argv
    this.githubEvent = githubEvent
  }

  async execute () {
    const useremail = this.argv.useremail || this.config.useremail || null

    console.log(`Get AccountID of ${useremail}.`)
    const id = await this.Jira.getAccountID(useremail)
    const accountId  = id.accountId
    return { accountID: id.accountId }
  }
}
