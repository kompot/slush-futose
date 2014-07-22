var gulp = require('gulp');
var install = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var inquirer = require('inquirer');

gulp.task('default', function (done) {  
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'Name for the app?', default: gulp.args[0]},
    {type: 'input', name: 'description', message: 'Description of the app?'}
  ],
  function (answers) {
    console.log('answers-------', answers);
    gulp.src(__dirname + '/app/templates/**') // Relative to __dirname
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./' + answers.name)) // Relative to cwd
      .pipe(install())
      .on('finish', function () {
        done(); // Finished!
      });
  });
});
