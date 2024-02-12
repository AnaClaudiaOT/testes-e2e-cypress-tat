/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable linebreak-style */
/// <reference path="../support/commands.d.ts" />/

describe('Login', () => {
	it('successfully logs in', () => {
		cy.guiLogin()
		cy.contains('a', 'Create a new note').should('be.visible')
	})
})