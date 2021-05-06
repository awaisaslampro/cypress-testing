describe('The Login Page', () => {
    

// Cypress.Commands.add('login', ()=>{
    it('login the user', ()=>{
    cy.visit('https://demo.subscriptionflow.com/portal/login')
    cy.get('[type=text]').type('test@noreply.com')
    cy.get('[type=password]').type('XPCXoW7C8y{enter}')
    // cy.hash().should('eq','#/')

})
})