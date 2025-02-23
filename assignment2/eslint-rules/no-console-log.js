export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow console.log',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.object.name === 'console' && node.property.name === 'log') {
          context.report({
            node,
            message: 'Do not use console.log.',
          });
        }
      },
    };
  },
};
