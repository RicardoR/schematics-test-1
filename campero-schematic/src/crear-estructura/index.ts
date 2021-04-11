import { strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  url,
  template,
} from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crearEstructura(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const config = tree.read('/angular.json');

    if (!config) {
      throw new SchematicsException('No estás en un proyecto de Angular');
    }
    _context.logger.info('estoy en el crear estructuras, schematic numero 2');

    const source = apply(url('./files'), [
      template({
        ...strings,
        ...(_options as object),
      } as any),
      move(_options.path),
    ]);
    return chain([branchAndMerge(chain([mergeWith(source)]))])(tree, _context);
  };
}
