const { get } = require('lodash')

const serviceName = 'jira'
const { format } = require('url')
const client = require('./client')(serviceName)

class Jira {
  constructor ({ baseUrl, token, email }) {
    this.baseUrl = baseUrl
    this.token = token
    this.email = email
  }

  async getAccountID (useremail) {
    return this.fetch('getAccountID', {
      pathname: `/rest/api/2/user/search`,
      query: {
        query: `${useremail}`
      },
    }, {
      method: 'GET',
    })
  }
}

module.exports = Jira
