# Jira User AccountID

For examples on how to use this, check out the [gajira-demo](https://github.com/atlassian/gajira-demo) repository
> ##### Only supports Jira Cloud. Does not support Jira Server (hosted)

## Usage

> ##### Note: this action requires [Jira Login Action](https://github.com/marketplace/actions/jira-login)

To add assignee to an issue you need to specify an issue key and a comment as action inputs, like:

```yaml
- name: AccountID of the USer
  uses: ujala-singh/selfhosted-jira-accountID@master
  with:
  useremail: myuser@domain.com
```

----
## Action Spec

### Environment variables
- None

### Inputs
- `useremail` - Email of the User

### Outputs
- `accountID` - Account ID of the User

### Reads fields from config file at $HOME/jira/config.yml
- `issue`

### Writes fields to config file at $HOME/jira/config.yml
- None