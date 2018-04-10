# Development set up for Phaser 3, Webpack, and ES6.

This is the final version of the project we create in https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/.

For a guide on the concepts included in this project and how to build it from scratch, take a look at [the blog post](https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/).

## Using This Project

1. Make a directory somewhere in your file system where you want to keep your project.
1. `cd` into that directory from the command line.
1. Clone this project with `git clone https://github.com/snowbillr/phaser3-webpack-es6-dev-starter.git`.

## Installing Dependencies

1. Follow the blog post for instructions on how to install [Yarn](https://yarnpkg.com/en/) if you don't already have it installed.
1. From the cloned project's directory, run `yarn install`.

## Running The Project

Once you've installed the project's dependencies, you can run the project using [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

1. From your project's directory, run `yarn webpack-dev-server`.
1. Open up your browser to `http://localhost:8080`.
1. You should see a web page with a black box that says "Hello Phaser!" in green text. That's our game!
1. :tada:

Because you are running the project through Webpack Dev Server, any time you make a change to your source code, the browser will automatically refresh with your updated code.
