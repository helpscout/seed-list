# seed-list [![npm version](https://badge.fury.io/js/seed-color-scheme.svg)](https://badge.fury.io/js/seed-color-scheme)

List component pack for Seed

## Install
```
npm install seed-list --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-list');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-list* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-list/_index";
```

**Note:** Because seed-list has dependencies, its includePaths output will be an `array`. If you're including other paths in addition to seed-grid, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedList = require('seed-list');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedList
      )
    }))
    .pipe(gulp.dest('./css'));
});
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-list-namespace: "c-list" !default;
$seed-list-item-selector: "li" !default;
```
