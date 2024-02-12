const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl:'https://notes-serverless-app.com',
		execTimeout: 25000,
		chromeWebSecurity: false,
		env: {
			viewportWidthBreakpoint: 768,
		},
		setupNodeEvents(on, config) {
			require('@cypress/grep/src/plugin')(config)
			return config
		},
	},	
	projectId: 'eqpq5d'
})
