let gulp = require("gulp");
let sass = require("gulp-sass")(require("sass"));
let rename = require("gulp-rename");
let browserSync = require("browser-sync").create();
let autoprefixer = require("gulp-autoprefixer");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let cssmin = require("gulp-cssmin");

gulp.task("sass", function () {
  return gulp
    .src("app/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 8 versions"],
      })
    )
    .pipe(gulp.dest("app/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});
gulp.task("style", function () {
  return gulp
    .src([
      "node_modules/normalize.css/normalize.css",
      "node_modules/bootstrap/dist/css/bootstrap.css",
      "node_modules/@splidejs/splide/dist/css/splide.min.css",
      "bower_components/jquery.form-styler/dist/jquery.formstyler.css",
      "bower_components/jquery.form-styler/dist/jquery.formstyler.theme.css",
    ])
    .pipe(concat("libs.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest("app/css"));
});
gulp.task("script", function () {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.js",
      "node_modules/@splidejs/splide/dist/js/splide.js",
      "bower_components/jquery.form-styler/dist/jquery.formstyler.js",
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"));
});
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
});
gulp.task("html", function () {
  return gulp.src("app/*.html").pipe(
    browserSync.reload({
      stream: true,
    })
  );
});
gulp.task("js", function () {
  return gulp.src("app/js/*.js").pipe(
    browserSync.reload({
      stream: true,
    })
  );
});

gulp.task("watch", function () {
  gulp.watch("app/scss/*.scss", gulp.parallel("sass"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/js/*.js", gulp.parallel("js"));
});

gulp.task(
  "default",
  gulp.parallel("style", "script", "sass", "watch", "browser-sync")
);
