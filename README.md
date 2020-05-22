heroku-set-app
==============

always set HEROKU_APP to a configured value

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/heroku-set-app.svg)](https://npmjs.org/package/heroku-set-app)
[![CircleCI](https://circleci.com/gh/cadecairos/heroku-set-app/tree/master.svg?style=shield)](https://circleci.com/gh/cadecairos/heroku-set-app/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/heroku-set-app.svg)](https://npmjs.org/package/heroku-set-app)
[![License](https://img.shields.io/npm/l/heroku-set-app.svg)](https://github.com/cadecairos/heroku-set-app/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ heroku plugins:install cadecairos/heroku-set-app
$ heroku set-app my-app
HEROKU_APP will be set to my-app until unset
$ heroku ps
=== web (Standard-1X): npm start (1)
web.1: up 2020/05/21 18:00:00 -0400 (~ 1h ago)
$ heroku set-app -d
Deleted my-app from the set-app config
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`heroku set-app`](#heroku-set-app)

## `heroku set-app appName`

Saves 'appName' to a user configuration file, which is applied to `process.env.HEROKU_APP` using an oclif hook.

```
USAGE
  $ heroku set-app appName

OPTIONS
  -d, --delete  delete the value of appName in the user config
```

_See code: [src/commands/set-app.js](https://github.com/cadecairos/heroku-set-app/blob/v0.0.1/src/commands/set-app.js)_
<!-- commandsstop -->
