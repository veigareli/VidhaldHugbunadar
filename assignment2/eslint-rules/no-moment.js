export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow usage of the moment library',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === 'moment') {
          context.report({
            node,
            message: 'Do not use the moment library.',
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee.name === 'require' &&
          node.arguments[0] &&
          node.arguments[0].value === 'moment'
        ) {
          context.report({
            node,
            message: 'Do not use the moment library.',
          });
        }
      },
    };
  },
};
