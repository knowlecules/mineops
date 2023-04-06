const {src, task} = require('gulp'),
    tagVersion = require('gulp-tag-version');
 
task( 'default', function (cb) {
  return src(['./package.json']).pipe(tagVersion())
});