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
    const email = this.argv.useremail || this.config.useremail || null

    console.log(`Get AccountID of ${email}.`)
    const id = await this.Jira.getAccountID(email)
    const accountId  = id.accountId
    return { accountId: id.accountId }
  }
}
