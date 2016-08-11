# TDD Class

## Files structure

```
dist/
    scripts/
    styles/
    templates/
src/
    scripts/
    styles/
    templates/
test/
    scripts/
.gitignore
.npmignore
CHANGELOG.md
package.json
README.md
```

## Building

There is a mandatory `prepublish` script in `package.json` file. It will be automagically run when pushing a new module version to server and it will create all the necessary files in `dist`.

You can run it to see what will consist of public module files:

```bash
npm run prepublish
```

It is possible to watch files for changes too (make sure to config `watch` in `package.json` to do stuff you want):

```bash
npm run watch
```

Also remember to bump the version number in `CHANGELOG.md` and `package.json` before pushing stuff.

## Testing

We use **Karma** with **Jasmine** run atop **PhantomJS** browser. To run tests (results in terminal), just execute:

```bash
npm run test
```

We also have some basic tests coverage reports generated in `dist/coverage`.

### Linting code

It is cool to have handsome code, so make sure to configure your editor to lint scripts with `.eslintrc.json` config, or at least execute linter few times during development and before publishing:

```bash
npm run lint
```

## Publishing

If you want to avoid mistakingly publishing your package, set `"private": true` in your `package.json` file.

### Updating/adding module

You just need this:

```bash
npm install
npm publish
```

## Workflow -- package

1. Do your stuff (mostly in `src/`).
2. Update version in `package.json`.
3. Add version info in `CHANGELOG.md` (we try to follow [keepachangelog.com](http://keepachangelog.com)).
4. Commit changes.
5. Publish it to npm.
