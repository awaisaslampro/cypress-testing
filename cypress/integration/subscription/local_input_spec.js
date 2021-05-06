describe('Home page', ()=>{

    it('successfully loads', () => {
        cy.visit('https://account.plastk.ca/')

        // Should be on a new URL which includes '/commands/actions'
        // cy.url().should('include', '/commands/actions')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('#user_signup_email')
          .type('fake@email.com')
        //   .should('have.value', 'fake@email.com')
 
        cy.get('#user_signup_password')
        .type('fake@email.com')
          cy.contains('Sign in').click()
        
    })
})


// https://account.plastk.ca/





// describe('Test an alert and the text displaying', function() {
//     it('Verify alert and its text content', function(){
//         cy.visit('http://www.seleniumeasy.com/test/javascript-alert-box-demo.html')    
    
//         const stub = cy.stub()  
//         cy.on ('window:alert', stub)
//         cy
//         .get('button').contains('Click me!').click()
//         .then(() => {
//           expect(stub.getCall(0)).to.be.calledWith('I am an alert box!')      
//         }) 
        
        
//         // or




//         // cy.on('window:alert', (str) => {
//         //     expect(str).to.equal(`This is an alert box!`)
//         //   })
//         })
    
//     })