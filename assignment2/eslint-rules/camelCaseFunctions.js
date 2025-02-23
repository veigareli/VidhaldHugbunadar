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
        const name = node.id.name;
        if (!/^[a-z][a-zA-Z0-9]*$/.test(name)) {
          context.report({
            node,
            message: 'Function name should be in camelCase.',
            fix(fixer) {
              const camelName = name.charAt(0).toLowerCase() + name.slice(1);
              return fixer.replaceText(node.id, camelName);
            },
          });
        }
      },
    };
  },
};
