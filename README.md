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

## Sequelize Create A Migrations

example commands

 > npx sequelize-cli migration:create --name modify_users_add_new_fields

 migrate database
> npx sequelize-cli db:migrate