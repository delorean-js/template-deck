# Delorean Deck Template

## About
This is a starter for creating HTML-based presentations using [Bespoke.js](http://markdalgleish.com/projects/bespoke.js/).

## Prerequisites
- [Node.js](http://nodejs.org/): the platform this starter runs on
- [NPM](https://github.com/npm/npm): provides access to packages this starter relies upon (should be included with Node)
- [Jake](https://github.com/mde/jake): the tasks that this starter includes support this task system

## Installation
1. Download and install Node.js and NPM.
2. [Install Jake using NPM](https://github.com/mde/jake#installing-with-npm).
3. Download and extract this project someplace.
4. Navigate to the root directory and run `npm install` to install dependencies.
5. To see the default project in action run the command `jake server:dev`.

## Structure
- This starter allows one to create either a single project or multiple projects with shared common pieces. After installing dependencies, a single project is automatically created in `src/main`. You can create more project if you want, but if you want to stick with a single project use `main`. From there you can leverage tasks to generate common boilerplate, build project(s), (once or continuously) and even start a local server pointing to your results. Shared features and functionality resides in `src/shared`.
- [Webpack](https://webpack.github.io/) is the build system used to assemble all our files into clean assets. When a presentation is built, by default it will generate a simple HTML file (`index.js`) and a JS file (`index.js`) that will contain all our code and assets combined in one neat package. If you wish to add customization to the Webpack builder see `webpack.config.js`. It is recommended that you extend the existing configuration instead of simply replacing it. If you want to see the default configuration see `webpack/index.js` in [delorean-js/base-deck].
- [LESS](http://lesscss.org/) is the stylesheet preprocessor used to write our stylesheets. [Autoprefixer](https://github.com/ai/autoprefixer) handle vendor prefixes so you don't need to write them. [normalize.css](https://necolas.github.io/normalize.css/) is included to provide a consistent base regardless of the browser.
  - If you need to include a CSS file, import it directly in JavaScript. (ex: `require('normalize.css/normalize.css')`)
  - If you want to reference something that isn't relative (`node_modules`, `shared`, etc.) from inside of LESS, prepend URLs with `~`. (ex: `@import '~lesshat/build/lesshat.less'`, `background-image: url(~images/test.png)`)
- [Jake](https://github.com/mde/jake) is the task system this starter leverages. To run one or more tasks simply run `jake [task]` from anywhere within the starter path. If you are within a project path (ex: `src/main`) then project-specific tasks appear. (ex: generators, build only this project) If you are within the starter path but not in a project path then other tasks appear. (ex: generate a new project, build a number of projects)
- [Bespoke.js](http://markdalgleish.com/projects/bespoke.js/) is the engine powering our presentations. It is a lightweight framework for presentations on modern browsers. It handles essential features so that you can extend it in your own way and create elaborate themes/structures. This starter provides a very basic black and white theme for presentations, which you are encouraged to customize. The default project comes with a few plugins are provided out of the box:
  - [bespoke-keys](https://github.com/markdalgleish/bespoke-keys) for keyboard support
  - [bespoke-loop](https://github.com/markdalgleish/bespoke-loop) so the presentation loops
  - [bespoke-scale](https://github.com/markdalgleish/bespoke-scale) to avoid worrying about resolution
- Slides are created programatically. For an example see `deck.js` in the default project. A deck gets created first by creating a container that will host our slides. (by default `<section>`) After that we can start adding slides using `push`. You can add string HTML, an HTML element, or function that will get executed and is expected to return any of the previous mentioned. [Markdown](https://help.github.com/articles/markdown-basics) is the default method of creating slides, which in the starter simply generates HTML strings. After slides are created, `start` is called to place the presentation someplace using Bespoke's settings. If a container is not specified, `<body>` is used by default.
