# GitAPItesting

An app to check the status of pull requests on a Github repository.

Output response will include:

1. List of open pull requests on specified repo
2. Number of commits
3. Number of comments
4. Name of user who opened pull request

Input fields take a user name and repo name.

- If input is incorrect it will currently return undefined
- If response does not exists it will currently return null

current setup required to use app:

1. Fork repo
2. NPM install
3. runs on live-server (similar to nodemon) -> use terminal command live-server to start local server and test
