module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"globals": {
		"window": true,
		"module": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint"],
	"rules": {
		"indent": [2, "tab"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"no-multiple-empty-lines":  ["error"]
	}
};