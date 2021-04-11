├── @angular-devkit/core@11.2.8
├── @angular-devkit/schematics@11.2.8
├── @angular-devkit/schematics-cli@0.1102.8
├── @angular-eslint/schematics@1.2.0
├── @angular/cli@11.2.8
├── @schematics/schematics@0.1102.8


Crear el proyecto
schematics blank --name=campero-schematic 

Instalar deps 
npm i

Compilar
npm run build

Generar un schematic desde la raiz de este proyecto:
schematics .:campero-schematic --path=holaRicardo.ts --dry-run=false

para hacerlo desde angular
npm link  (desde este proyecto)

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
