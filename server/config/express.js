/**
 * Express configuration
 */

'use strict';

const express = require('express');
const morgan = require('morgan');
const shrinkRay = require('shrink-ray');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const lusca = require('lusca');
const config = require('./environment');
const passport = require('passport');
const session = require('express-session');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

const MongoStore = connectMongo(session);

module.exports = function (app) {
  const env = app.get('env');

  if (env === 'development' || env === 'test') {
    app.use(express.static(path.join(config.root, '.tmp')));
  }

  // app.set('appPath', path.join(config.root, 'client'));
  // app.use(express.static(app.get('appPath')));
  app.use(morgan('dev'));

  app.use(shrinkRay());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());


  // Persist sessions with MongoStore / sequelizeStore
  // We need to enable sessions for passport-twitter because it's an
  // oauth 1.0 strategy, and Lusca depends on sessions
  app.use(session({
    secret: config.secrets.session,
    saveUninitialized: true,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      db: 'node-api-base-struct'
    })
  }));

  /**
   * Lusca - express server security
   * https://github.com/krakenjs/lusca
   */
  // if (env !== 'test' && !process.env.SAUCE_USERNAME) {
  //   app.use(lusca({
  //     csrf: {
  //       angular: true
  //     },
  //     xframe: 'SAMEORIGIN',
  //     hsts: {
  //       maxAge: 31536000, //1 year, in seconds
  //       includeSubDomains: true,
  //       preload: true
  //     },
  //     xssProtection: true
  //   }));
  // }


  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }
};
