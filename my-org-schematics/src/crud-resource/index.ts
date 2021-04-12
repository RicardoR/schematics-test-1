import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function crudResource(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
    ]);

    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}
