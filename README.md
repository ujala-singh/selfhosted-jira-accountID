# Jira Assignee
Add an Assignee to an issue

For examples on how to use this, check out the [gajira-demo](https://github.com/atlassian/gajira-demo) repository
> ##### Only supports Jira Cloud. Does not support Jira Server (hosted)

## Usage

> ##### Note: this action requires [Jira Login Action](https://github.com/marketplace/actions/jira-login)

To add assignee to an issue you need to specify an issue key and a comment as action inputs, like:

```yaml
- name: Comment on issue
  uses: ujala-singh/selfhosted-jira-assignee@master
  with:
  issue: IFRA-2
  assignee: ujala.singh
```

----
## Action Spec

### Environment variables
- None

### Inputs
- `issue` - An issue key to add a comment for
- `assignee` - Assignee

### Outputs
- None

### Reads fields from config file at $HOME/jira/config.yml
- `issue`

### Writes fields to config file at $HOME/jira/config.yml
- None