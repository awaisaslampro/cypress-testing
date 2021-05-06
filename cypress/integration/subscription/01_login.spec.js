describe('Login to the page', ()=>{
    it('sign in to the application', ()=>{

        cy.visit('/portal/login')
        cy.login()

    })
        it("I should be on the customer's portal Dashboard/home page", () => {
            cy.get('.navbar-brand').contains('Dashboard');
          });
          it('I should see "Welcome <Username>" ', () => {
            cy.contains('Welcome')
          });

        // cy.get('input[type="text"]').type("andybary@mail.com")
        // cy.get('input[type="password"]').type('test1234{enter}')

        // cy.get('button[type="submit"]').contains('Login').should('be.visible').click({force:true})
    
})