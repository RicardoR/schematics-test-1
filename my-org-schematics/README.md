# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 
npm run build:watch
schematics .:hello ricardoRodriguez  --debug=false

# Optional parameter findOne
schematics .:crud-resource userRole --findOne  --debug=false --force

# In Angular project:
schematics ../my-org-schematics/src/collection.json:crud-resource lazy-feature/user-role --debug=false 