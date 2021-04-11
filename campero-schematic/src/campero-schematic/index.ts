import { chain, Rule, schematic, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function camperoSchematic(_options: any): Rule {

  return chain([
    schematic('crear-estructura', _options),
    (tree: Tree, _context: SchematicContext) => {

      _context.logger.info('Soy el campero schematic número 1');
      tree.create('helloMalaga.ts', 'Hola Ricardo');

      return tree;
    },

  ])
}
