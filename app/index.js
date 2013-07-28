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
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};

NlexpressGenerator.prototype.app = function app() {
  this.mkdir('app');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

NlexpressGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
