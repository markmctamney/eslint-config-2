module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },

    // parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    // ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: [
        // 'universe',
        'universe/native',
        'universe/node',
        'universe/web',
        'plugin:yaml/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react-native/all',
        // 'plugin:monorepo/recommended',
        // 'plugin:jsonc/recommended-with-json',
        'plugin:jsonc/recommended-with-jsonc',
        // 'plugin:jsonc/recommended-with-json5',
        // 'plugin:json-schema-validator/recommended',
    ],
    plugins: ['yaml', 'import', 'graphql'],
    rules: {
        'import/no-unresolved': 'error',
        'no-irregular-whitespace': 'off',
        'import/order': [
            'warn',
            {
                groups: [
                    'unknown',
                    'type',
                    'object',
                    'builtin',
                    'external',
                    ['parent', 'sibling'],
                    'index',
                ],
                pathGroups: [
                    {
                        pattern: '@nexpo/**', // TODO: unhardcode
                        group: 'parent',
                        position: 'before',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                },
                // warnOnUnassignedImports: true,
            },
        ],

        // 'json-schema-validator/no-invalid': [
        //     'error',
        //     {
        //         schemas: [
        //             {
        //                 fileMatch: ['.eslintrc.js'],
        //                 schema: {
        //                     /* JSON Schema Definition */
        //                     $schema: 'http://json-schema.org/draft-04/schema#',
        //                 }, // or string
        //             },
        //         ],
        //         useSchemastoreCatalog: true,
        //     },
        // ],

        // 'json/*': ['warn', { allowComments: false }],
        // 'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/consistent-type-imports': 'error',

        'react-native/no-unused-styles': 'warn',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-color-literals': 'warn',
        'react-native/sort-styles': 'warn',
        'react-native/no-raw-text': ['off', { skip: ['RNText', 'NativeText'] }],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
