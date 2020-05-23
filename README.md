heroku-set-app
==============

always set HEROKU_APP to a configured value

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/heroku-set-app.svg)](https://npmjs.org/package/heroku-set-app)
[![CircleCI](https://circleci.com/gh/cadecairos/heroku-set-app/tree/master.svg?style=shield)](https://circleci.com/gh/cadecairos/heroku-set-app/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/heroku-set-app.svg)](https://npmjs.org/package/heroku-set-app)
[![License](https://img.shields.io/npm/l/heroku-set-app.svg)](https://github.com/cadecairos/heroku-set-app/blob/master/package.json)

* [Usage](#usage)
* [Commands](#commands)

# Usage

```sh-session
$ heroku plugins:install cadecairos/heroku-set-app
$ heroku set-app:set my-app
HEROKU_APP will be set to my-app until unset
$ heroku ps
=== web (Standard-1X): npm start (1)
web.1: up 2020/05/21 18:00:00 -0400 (~ 1h ago)
$ heroku set-app:delete
Deleted my-app from the set-app config
...
```

# Commands

* [`heroku set-app:set`](#heroku-set-app)
* [`heroku set-app:delete`](#heroku-set-app)

## `heroku set-app:set appName`

Saves 'appName' to a user configuration file, which is applied to `process.env.HEROKU_APP` using an oclif hook.

```
USAGE
  $ heroku set-app:set appName
```

_See code: [src/commands/set-app/set.js](https://github.com/cadecairos/heroku-set-app/blob/v0.0.2/src/commands/set-app/set.js)_

## `heroku set-app:delete`

Removes any value of appName from the config file

```
USAGE
  $ heroku set-app:delete
```

_See code: [src/commands/set-app/delete.js](https://github.com/cadecairos/heroku-set-app/blob/v0.0.2/src/commands/set-app/delete.js)_