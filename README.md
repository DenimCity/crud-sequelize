# Crud-Sequelize

[![Coverage Status](https://coveralls.io/repos/github/DenimCity/crud-sequelize/badge.svg?branch=master)](https://coveralls.io/github/DenimCity/crud-sequelize?branch=master)

Tasks

- [x] create models with relationssips
- [x] logger
- [x] eslint
- [x] creating testing environment
- [x] tests
- [] add husky pre-commit lint and run tests
- [] replace travis with github actions
- [] deploy to heroku when a pull request is merged or push to master
- [] run tests in github actions when branch is pushed
- [] add code coverage requirements

## Requirements to run locally

- npm
- node
- postgres

.env file with Env Varibale
DATABASE_URL=
DEV_DATABASE_URL=postgres://'yourusername':postgres@127.0.0.1:5432/dev_db
TEST_DATABASE_URL=postgres://'yourusername':postgres@127.0.0.1:5432/test_db

## Create A Migration

example commands

 > npx sequelize-cli migration:create --name modify_users_add_new_fields

 migrate database
> npx sequelize-cli db:migrate