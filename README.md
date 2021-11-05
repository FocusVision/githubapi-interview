# Github API Interview

Github API interview app built with React

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) 16.x or greater required
* [Yarn](https://yarnpkg.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd githubapi-interview`
* `yarn`

## Running / Development

* `yarn start`
* Visit your app at [http://localhost:3000](http://localhost:3000).

## Setting up Your Github Keys

This project uses endpoints from the github public API which you can use
without authentication, but it is rate limited. If you are hitting the rate
limit and want to try it with authentication, you may follow these optional
instructions to configure that.

Create a personal access token by visiting your [Github Developer settings
page](https://github.com/settings/tokens).

* Click `Generate new token`
* Add a note of what this token is for
* You will only need to enable the following scopes
  * Under `repo`, enable `public_repo`
  * Under `user`, enable `read:user`
* Save the token by clicking `Generate token`

This will give you an access token. Be sure to copy it before doing anything
else.

To use within the app, copy the `.env.sample` file into `.env.local`.

```
$ cp .env.sample .env.local
```

Replace the username value with your github username and the token value with
the newly generated token.
