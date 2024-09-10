# Gulp - сборка

Используемые плагины:

> gulp <br>
> del <br>
> gulp-file-include <br>
> gulp-include <br>
> gulp-uglify <br>
> gulp-htmlmin <br>
> gulp-postcss <br>
> postcss-import <br>
> css-mqpacker <br>
> cssnano <br>
> autoprefixer <br>
> browser-sync

## Начало работы

Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория <br>
`git clone <this repo>` <br>
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости. <br>
`gulp` - базовая команда, которая запускает сборку.

## Структура папок и файлов

```
├── src/                          # Исходники
│   ├── scripts                   # Скрипты
│   │   ├── components            # js-компоненты
│   │   ├── libs                  # Папка для загрузки локальных версий библиотек
│   │   ├── libs.js               # Файл с подключениями библиотек
│   │   └── main.js               # Файл с подключениями компонентов
│   ├── styles                    # Стили сайта
│   │   ├── components            # css-компоненты
│   │   ├── libs                  # Папка для хранения локальных css-стилей библиотек
│   │   ├── libs.css              # Файл для подключения стилей библиотек
│   │   └── style.css             # Файл для подключения стилей компонентов
│   ├── partials                  # Папка для хранения html-частей страницы
│   ├── images                    # Картинки
│   │   ├── content               # Папка для хранения контентных картинок
│   │   └── decor                 # Папка для хранения декоративных картинок
│   ├── fonts                     # Папка для хранения шрифтов
│   └── index.html                # Главный html-файл
├── gulpfile.js                   # Файл с настройками Gulp
├── package.json                  # Файл с настройками сборки и установленными пакетами
└── README.md                     # Документация сборки
```

## Оглавление
1. [Работа с html](#работа-с-html)
2. [Работа с CSS](#работа-с-css)
3. [Работа с JavaScript](#работа-с-javascript)

## Работа с html

Благодаря плагину __gulp-file-include__ вы можете разделять html-файл на различные шаблоны, которые должны храниться в папке __partials__. Удобно делить html-страницу на секции.

> Для вставки html-частей в главный файл используйте `@include('partials/filename.html')`

Если вы хотите создать многостраничный сайт - копируйте __index.html__, переименовывайте как вам нужно, и используйте.

## Работа с CSS

Стили, написанные в __components__, следует подключать в __style.css__.

Чтобы подключить сторонние css-файлы (библиотеки) - положите их в папку __libs__ и подключите в файле ___libs.css__.

> Для подключения css-файлов используйте директиву `@import 'components/settings.css'`

В итоговой папке __dist/css__ создаются два файла: <br> __style.css__ - для стилей страницы, <br> __libs.css__ - для стилей всех библиотек, использующихся в проекте.

## Работа с JavaScript

JS-код лучше делить на компоненты - небольшие js-файлы, которые содержат свою, изолированную друг от друга реализацию. Такие файлы помещайте в папку __components__, а потом подключайте в файле ___main.js__.

Для подключения библиотек необходимо поместить файл в папку __libs__, а потом подключайте в файле ___libs.js__.

> Для подключения js-файлов используйте директиву `//=require components/header.js`