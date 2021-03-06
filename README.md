# Crud-Sequelize

Tasks

- [X] create models with relationssips
- [x] logger
- [x] eslint
- [x] creating testing environment
- [x] tests
- [x] add husky pre-commit lint and run tests
- [x] replace travis with github actions
- [X] deploy to heroku when a pull request is merged or push to master
- [x] run tests in github actions when branch is pushed
- [x] add code coverage requirements
- [] increase code coverage to 100%
- [x] create a QA and Production environment on heroku
- [] create live e2e tests for QA environment
- [] create release note and version releases
- [X] fitler out what create a trigger for build actions
- [X] create deploy app instruction
- [X] create deploy app create and tear down shell scripts
- [] lock down qa and master
- [x] find out how to version the packagae.json

## Requirements to run locally

- npm
- node
- postgres

.env Env Varibale

```
DATABASE_URL=
DEV_DATABASE_URL=postgres://'yourusername':postgres@127.0.0.1:5432/dev_db
TEST_DATABASE_URL=postgres://'yourusername':postgres@127.0.0.1:5432/test_db
```

## If you have Postgres on you computer

commands to create the database

```createdb dev_db -U yourusername'```

```createdb test_db -U 'yourusername'```

## Download a Postgres CLI such as:
[pgAdmin](https://www.pgadmin.org/)

## Sequelize Commands Used to Create Project

- npm install sequelize sequelize-cli pg pg-hstore
- touch .sequelizerc
- in .sequelizerc

```
const path = require('path')

module.exports = {
  config: path.resolve('./database/config', 'config.js'),
  'models-path': path.resolve('./database/models'),
  'seeders-path': path.resolve('./database/seeders'),
  'migrations-path': path.resolve('./database/migrations'),
}
```

- sequelize init
- createdb dev_db -U <db_user>
- createdb test_db -U <db_user>

- ```sequelize model:generate --name User --attributes name:string,email:string```
- ```sequelize model:generate --name Post --attributes title:string,content:text,userId:integer```
- ```sequelize model:generate --name Comment --attributes postId:integer,comment:text,userId:integer```
- create relations between models in models folder
- ```sequelize db:migrate```
- npm i dotenv


```
sequelize seed:generate --name User

sequelize seed:generate --name Post

sequelize seed:generate --name Comment
```

- in seeders create seed data
- ```sequelize db:seed:all```

## Create A Migration

example commands

 ```npx sequelize-cli migration:create --name modify_users_add_new_fields```

 migrate database
 
```npx sequelize-cli db:migrate```

## Creating Environments

- Assuming you have Heroku CLI installed

```
###  Create a Heroku Apps For Produciton and Staging
NOTE: "desired-app-name" should be a unique name you create

## Creating Environtments
heroku create desired-app-name-qa --buildpack heroku/nodejs --remote staging
heroku create desired-app-name-prod --buildpack heroku/nodejs --remote production

## Setting Env Variables for Environments
heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false NODE_ENV=test --app desired-app-name-qa
heroku config:set NPM_CONFIG_PRODUCTION=true YARN_PRODUCTION=true NODE_ENV=production --app desired-app-name-prod

heroku addons:create heroku-postgresql
## ADDING DATABASE
heroku addons:create heroku-postgresql --app desired-app-name-qa
heroku addons:create heroku-postgresql --app desired-app-name-prod

 ```

### Migrating Database to New Database

- BackUp Database

```heroku pg:backups:capture -a "your app name"```

- Download Data Dump

```heroku pg:backups:download -a "your app name"```
