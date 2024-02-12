const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl:'https://notes-serverless-app.com',
		execTimeout: 25000,
		chromeWebSecurity: false
		// setupNodeEvents(on, config) {
		// 	// implement node event listeners here
		// },
	},
	env: {
		viewportWidthBreakpoint: 768,
	},
})
