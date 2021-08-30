module.exports = {
        /**
         * @link {import('./packages/eslint/src/default.ts')}
         */
        root: true,
        extends: '@nexpo/eslint-config',

        overrides: [
                {
                        // For packages/screens, prefer both default (for Next) and named (for Native) exports
                        files: ['packages/screens/**/*.tsx'],
                        rules: {
                                // Alternate to find both
                                // 'import/prefer-default-export': 'error', // default
                                'import/no-default-export': 'error', // named
                                
                                'react/display-name': 1,
                        },
                },
                {
                        files: ['apps/nexpo/src/pages/**/*.tsx'],
                        rules: {
                                // Helpful reminder to always have a default export from Next.js pages
                                'import/prefer-default-export': 'error', // default
                                
                                'react/display-name': 1,
                        },
                }
        ]
}
