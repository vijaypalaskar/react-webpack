module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'rules': {
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': false,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false,
        'FunctionExpression': false,
      },
    }],
  },
  // 'overrides': [
  //   {
  //     'files': ['*.js', 'src/**/*.js', 'src/**/*.jsx'],
  //     'excludedFiles': '*.test.js',
  //   },
  // ],

};
