import gulp from 'gulp';
import { deleteAsync } from 'del';
import fileinclude from 'gulp-file-include';
import include from 'gulp-include';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import postcss from 'gulp-postcss';
import pimport from 'postcss-import';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import sync from 'browser-sync';

export const clean = () => {
    return deleteAsync('./dist')
};

// HTML
export const html = () => {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            removeComments: false,
            collapseWhitespace: false,
        }))
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());
};

// Styles
export const stylesComponents = () => {
    return gulp.src('src/styles/style.css')
        .pipe(postcss([
            pimport,
            mqpacker,
            autoprefixer({
                overrideBrowserslist:  ['last 2 versions']
            })
        ]))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
};

export const stylesLibs = () => {
    return gulp.src('src/styles/libs.css')
        .pipe(postcss([
            pimport,
            cssnano
        ]))
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
};

// Scripts
export const scriptsComponents = () => {
    return gulp.src('src/scripts/main.js')
        .pipe(include())
        .pipe(gulp.dest('dist/js'))
        .pipe(sync.stream());
};

export const scriptsLibs = () => {
    return gulp.src('src/scripts/libs.js')
        .pipe(include())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(sync.stream());
};

// Copy
export const copy = () => {
    return gulp.src([
        'src/fonts/**/*',
        'src/images/**/*',
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream({
            once: true
        }));
};

// Server
export const server = () => {
    sync.init({
        ui: false,
        notify: false,
        server: {
            baseDir: 'dist'
        }
    });
};

// Watch
export const watch = () => {
    gulp.watch('src/**/*.html', gulp.series(html));
    gulp.watch('src/styles/**/*.css', gulp.series(stylesComponents, stylesLibs));
    gulp.watch('src/scripts/**/*.js', gulp.series(scriptsComponents, scriptsLibs));
    gulp.watch([
        'src/fonts/**/*',
        'src/images/**/*',
    ], gulp.series(copy));
};

// Default
export default gulp.series(
    clean,
    html,
    stylesComponents,
    stylesLibs,
    scriptsComponents,
    scriptsLibs,
    copy,
    gulp.parallel(
        watch,
        server,
    ),
);