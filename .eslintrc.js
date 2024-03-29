module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	env: {
		'jest/globals': true,
	},
	rules: {
		'no-shadow': 'off',
		curly: 'error',
	},
	ignorePatterns: ['jest/*'],
	globals: {},
};
