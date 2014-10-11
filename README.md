# Horizon project template v0.0.3

This is a template to start your own project that uses Grunt and libsass!

## Requirements

You'll need to have the following items installed before continuing.

  * [Git](http://git-scm.com/): If you don't have the executable yet.
  * [Ruby](http://rubyinstaller.org/): Install the 1.9.x branch
  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows): Install Win64 dynamic at 16 bits-per-pixel v.6.8.x or better

## Quickstart

Make sure you have bower and grunt-cli installed globally:

```bash
npm install -g bower grunt-cli
```

Get the repository
```bash
cd /your/project
git clone git://github.com/suprsidr/project-starter-kit.git
```

Rename as desired
```bash
cd /newly renamed directory
```

Then install project dependencies locally:

```bash
npm install
```

While you're working on your project, run:

`grunt`

And you're set!

Grunt will watch the img-src directory and automatically optimize and copy jpg and png images to the img directory for production. 
Grunt will also be watching the resizes directory for new images to build the resizes specified in Gruntfile.js to the img directory.

We are of course minifying js and compiling sass as well.

## Now includes fixed off-canvas menu example
Make sure to check `css/scss/main.scss` and `js/main.js` for specifics.

## Release History
* 2014-10-11   v0.0.3   Update grunt modules, to enable live reload
* 2014-07-15   v0.0.2   Update to foundation 5.2.2
* 2014-03-07   v0.0.1   Update to foundation 5.2.0
* 2014-02-16   v0.0.1   added concat
* 2014-02-13   v0.0.1   added sourceMaps
* 2014-02-09   v0.0.1   initial
