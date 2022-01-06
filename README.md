# api-test-finance

[![N|Solid](https://res.cloudinary.com/practicaldev/image/fetch/s--S6Nn_hYs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3fnnfif593kiswfmwwen.jpg)](https://jestjs.io/pt-BR/)

The main goal is showed a TDD development with some importants tools.

## Features

- TDD with Jest
- NodeJS
- Express
- Knex
- Docker
- Linter
- PostgreSQL

## ESLint

Initial configuration (after install)

```sh
./node_modules/.bin/eslint --init
```

Fix all problems

```sh
./node_modules/.bin/eslint --fix .
```

## Some importants advises

Important to use a secure mode from Jest. It is into package.json scripts: `"secure-mode": "jest --watchAll"`

```sh
npm run secure-mode
```

## Installations and details

Here is just some informations. To install all dependences is:

```sh
npm install
```

Some informations:

```sh
npm i -S -E body-parser # get the data from send method and take into body
```

```sh
npm i -S -E consign # consign include all imported middlewares into app.js
```

## Docker

```sh
docker-compose up
```

> Note: `-d` is required after up for run on background.

## Knex

```sh
 node_modules/.bin/knex migrate:make create_users --env test
```

```sh
 node_modules/.bin/knex migrate:latest --env test
```

```sh
 node_modules/.bin/knex migrate:rollback --env test
```

test is the name into the knexfile.js


## Jest

test.skip (ignores  it)

test.only (executes just it on the file)


## License

MIT

**Free Software, Yeah!**
