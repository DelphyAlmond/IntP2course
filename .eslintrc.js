module.exports = {
    // Specify environments your code runs in (e.g., browser, node)
    env: {
        browser: true,
        node: true,
        es2021: true // Supports ES12 features
    },
    // Extend recommended configurations and Prettier integration
    extends: [
        'eslint:recommended', // Use recommended ESLint rules
        'plugin:prettier/recommended' // Use Prettier rules via eslint-plugin-prettier
    ],
    // Parser options for newer JavaScript features
    parserOptions: {
        ecmaVersion: 12, // Or 2021, 2022, etc. based on your Node.js version
        sourceType: 'module' // Use ES Modules
    },
    // Add specific rules or overrides here
    rules: {
        // Example: Require semicolons (Prettier handles this, but can be set here)
        // 'semi': ['error', 'always'],
        // Example: No unused variables (from eslint:recommended)
        // 'no-unused-vars': 'warn',
        // Add rules for HTML or CSS if using specific plugins
    },
    // Optional: Specify settings for plugins (like HTML or CSS plugins if used)
    // settings: {
    //   html: {
    //     // HTML plugin settings
    //   },
    // }
};