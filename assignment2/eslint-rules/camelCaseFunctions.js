export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce camelCase for function names',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id && node.id.name) {
          const functionName = node.id.name;
          if (!/^[a-z][a-zA-Z0-9]*$/.test(functionName)) {
            const fixedName =
              functionName.charAt(0).toLowerCase() + functionName.slice(1);
            context.report({
              node: node.id,
              message: 'Function name should be in camelCase.',
              fix(fixer) {
                return fixer.replaceText(node.id, fixedName);
              },
            });
          }
        }
      },
    };
  },
};
