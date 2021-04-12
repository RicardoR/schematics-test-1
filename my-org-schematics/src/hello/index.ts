import { Schema } from './schema';
import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function hello(_options: Schema): Rule {

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
