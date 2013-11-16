'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NlexpressGenerator = module.exports = function NlexpressGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NlexpressGenerator, yeoman.generators.Base);

NlexpressGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'appName',
    message: 'What would you like to name your app?'
  }, {
    type: 'confirm',
    name: 'mongoose',
    message: 'Include mongoose?',
    default: true
  }, {
    type: 'confirm',
    name: 'handlebars',
    message: 'Include handlebars?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;
    this.mongoose = props.mongoose;
    this.handlebars = props.handlebars;

    cb();
  }.bind(this));
};

NlexpressGenerator.prototype.app = function app() {
  this.mkdir('app');

  if (this.mongoose) {
    this.mkdir('app/models');
    this.copy('app/models/index.js', 'app/models/index.js');
  }

  if (this.handlebars) {
    this.mkdir('app/views');
    this.copy('app/views/index.hbs', 'app/views/index.hbs');
  }

  this.mkdir('app/controllers');
  this.copy('app/controllers/index.js', 'app/controllers/index.js');
  this.template('app/controllers/_root_controller.js', 'app/controllers/root_controller.js');

  this.mkdir('app/middleware');
  this.copy('app/middleware/index.js', 'app/middleware/index.js');

  this.mkdir('public');
  this.mkdir('config');
  this.mkdir('config/environments');

  this.copy('config/routes.js', 'config/routes.js');
  this.copy('config/environment.js', 'config/environment.js');
  this.copy('config/environments/development.js', 'config/environments/development.js');
  this.copy('config/environments/production.js', 'config/environments/production.js');
  this.template('config/_index.js', 'config/index.js');

  this.template('_server.js', 'server.js');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
};

NlexpressGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
};
