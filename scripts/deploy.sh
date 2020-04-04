heroku create desired-app-name-qa --buildpack heroku/nodejs --remote qa
heroku create desired-app-name-prod --buildpack heroku/nodejs --remote prod

heroku config:set NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false NODE_ENV=qa --app desired-app-name-qa
heroku config:set NPM_CONFIG_PRODUCTION=true YARN_PRODUCTION=true NODE_ENV=production --app desired-app-name-prod

heroku addons:create heroku-postgresql --app desired-app-name-qa  --as TEST_DATABASE
heroku addons:create heroku-postgresql --app desired-app-name-prod