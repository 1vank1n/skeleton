# Установка

```
npm i
```


# Использование

```
npm start
```

Проект доступен по `http://localhost:3000`


# Описание

## Структура папок

```
./dist                 — готовый шаблон
./dist/fonts           — шрифты
./dist/html            — шаблоны
./dist/images          — графика
./dist/scripts         — js
./dist/styles          — css

./src                  — исходники
./src/html             — шаблоны
./src/scripts          — js
./src/scripts/vendor   - всё, что в этой папке копируются целиком в dist/...
./src/styles           — css

./tasks                – задачи для gulp
```

## Используемые пакеты

* `autoprefixer-stylus`
* `babel-cli`
* `babel-eslint`
* `babel-preset-es2015`
* `browser-sync`
* `del`
* `eslint`
* `eslint-config-airbnb-base`
* `eslint-plugin-import`
* `gulp`
* `gulp-babel`
* `gulp-concat`
* `gulp-cssnano`
* `gulp-group-css-media-queries`
* `gulp-html-extend`
* `gulp-html-prettify`
* `gulp-if`
* `gulp-notify`
* `gulp-plumber`
* `gulp-sourcemaps`
* `gulp-stylus`
* `gulp-svg-sprite`
* `gulp-watch`
* `require-dir`
* `run-sequence`

Используется [порт bootstrap'a 3.3.7 на stylus](https://github.com/maxmx/bootstrap-stylus)
