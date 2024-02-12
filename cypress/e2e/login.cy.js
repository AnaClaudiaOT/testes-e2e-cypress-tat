/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable linebreak-style */
// cypress/e2e/login.cy.js

describe('Login', () => {
	it('successfully logs in', () => {
		cy.guiLogin()
		cy.contains('a', 'Create a new note').should('be.visible')
	})
})