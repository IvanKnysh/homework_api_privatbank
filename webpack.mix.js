const mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.js('src/js/task-1.js', 'dist/js')
    .js('src/js/task-2.js', 'dist/js')
    .js('src/js/task-3.js', 'dist/js')
   .sass('src/css/task-1.scss', 'dist/css')
   .sass('src/css/task-2.scss', 'dist/css')
   .sass('src/css/task-3.scss', 'dist/css');
