# Node Api Base Structure

This is project is based on the awesome [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack).
It is meant to be a scaffold for Nodejs APIs only, without frontend integration.

## Features

* JWT authentication boilerplate
* Unit and Integration tests template
* Mongo as database
* Full compatibility with `endponint` generator from [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack)
* Project structure inspirend on [RisingStack](https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/) tips


## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 6.x.x
- [Gulp](http://gulpjs.com/)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit and integration tests with mocha.
