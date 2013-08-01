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
    name: 'mongo',
    message: 'Include mongodb?',
    default: true
  }, {
    type: 'confirm',
    name: 'redis',
    message: 'Include redis?',
    default: true
  }, {
    type: 'confirm',
    name: 'socketIO',
    message: 'Include socket.io?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;
    this.mongo = props.mongo;
    this.redis = props.redis;
    this.socketIO = props.socketIO;

    cb();
  }.bind(this));
};

NlexpressGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('public');

  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
};

NlexpressGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
};
