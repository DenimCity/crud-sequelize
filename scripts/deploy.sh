heroku create desired-app-name-qa --buildpack heroku/nodejs --remote staging
heroku create desired-app-name-prod --buildpack heroku/nodejs --remote production

heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false NODE_ENV=test --app desired-app-name-qa
heroku config:set NPM_CONFIG_PRODUCTION=true YARN_PRODUCTION=true NODE_ENV=production --app desired-app-name-prod

heroku addons:create heroku-postgresql --app desired-app-name-qa
heroku addons:create heroku-postgresql --app desired-app-name-prod