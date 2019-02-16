# 3 Musketeers

> RDD, CDD and TDD

![3-musketeers](https://source.unsplash.com/6I7PthWd8BI/800x600)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [🐣 Introduction](#-introduction)
- [🎯 Objectives](#-objectives)
- [👩‍💻 Just tell me what to do](#%E2%80%8D-just-tell-me-what-to-do)
- [🏃‍♀️ Steps to do](#%E2%80%8D-steps-to-do)
  - [cash: RDD and CDD](#cash-rdd-and-cdd)
  - [starwars: TDD](#starwars-tdd)
  - [About Jest](#about-jest)
- [🛣️ Related course](#-related-course)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🐣 Introduction

Being a Good Programmer Isn't Just About Writing Code.

It's also writing documentations, comments and unit tests.

## 🎯 Objectives

1. write the **README.md** and missing **comments** with JSDoc for the library [cash](./cash)
2. write the **Unit Tests** for the library [starwars](/starwars)

## 👩‍💻 Just tell me what to do

<ol>
<li>Fork the project via `github`

![fork](./fork.png)
</li>

<li>Clone your forked repository project `https://github.com/YOUR_USERNAME/3-musketeers`

```sh
❯ cd /path/to/workspace
❯ git clone git@github.com:YOUR_USERNAME/3-musketeers.git
```
</li>

<li><strong>Do things</strong></li>
<li>Commit and push your different modifications

```sh
❯ cd /path/to/workspace/3-musketeers
❯ git add -A && git commit -m "docs(readme): add usage section"
❯ git push origin master
```
</li>
</ol>

**Note**:

* [why following a commit message convention?](https://www.conventionalcommits.org)
* if you catch an error about authentication, [add your ssh to your github profile](https://help.github.com/articles/connecting-to-github-with-ssh/).
* If you need some helps on git commands, read [git - the simple guide](http://rogerdudler.github.io/git-guide/)

## 🏃‍♀️ Steps to do

### [cash](./cash): RDD and CDD

Understand first the library features

```sh
❯ cd /path/to/workspace/3-musketeers/cash
❯ npm i
❯ node bin/index.js

# chech what's going on
# ...
```

1. Complete the [cash/README.md](./cash/README.md) file with a complete description of installation, usage... of the library
2. add JSDOC function block for the file [cash/bin/cash.js](./cash/bin/cash.js)

### [starwars](./starwars): TDD

Understand first the library features

```sh
❯ cd /path/to/workspace/3-musketeers/starwars
❯ npm i
❯ node sandbox.js

# chech what's going on
# ...
```

2. Run unit tests with `npm run test`
3. Complete the unit tests (with Jest as testing framework) file [starwars/src/index.test.js](./starwars/src/index.test.js) to cover at least 80%

#### About [Jest](https://jestjs.io/en/)

* [Getting started](https://jestjs.io/docs/en/getting-started) with Jest
* Jest uses [matchers](https://jestjs.io/docs/en/using-matchers) to let you test values in different ways.
* When you're writing tests, you often need to check that values meet certain conditions. [expect](https://jestjs.io/docs/en/expect) gives you access to a number of `matchers` that let you validate different things.

## 🛣️ Related course

* [Course 6 - 3 Musketeers: RDD, CDD and TDD](https://github.com/92bondstreet/javascript-empire#-course-6---3-musketeers-rdd-cdd-and-tdd)

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
