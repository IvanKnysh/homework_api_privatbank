const mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.js('src/js/task-1.js', 'dist/js')
   .sass('src/css/task-1.scss', 'dist/css');
