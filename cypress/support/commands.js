Cypress.Commands.add('login', ()=>{

        cy.visit('/portal/login')

        cy.get('input[type="text"]').type("andybary@mail.com")
        cy.get('input[type="password"]').type('test1234{enter}')

        // cy.get('button[type="submit"]').contains('Login').should('be.visible').click({force:true})

})

Cypress.Commands.add("checkPortal", () =>{
        cy.location('pathname').then(($myPath)=> {
          if ($myPath == "/portal/login") {
                  cy.loginPortal('andybary@mail.com', 'test1234')
                  Cypress.Cookies.preserveOnce('testsubscriptionflow_session_portal')
              }
          })
      })
      


// Cypress.Commands.add('login', ()=>{
//     it('login the user', ()=>{
//         cy.visit('https://demo.subscriptionflow.com/portal/login')
//         cy.get('[type=text]').type('test@noreply.com')
//         cy.get('[type=password]').type('XPCXoW7C8y{enter}')
//         // cy.hash().should('eq','#/')

//     })
// })



// Cypress.Commands.add('login', () => {

//     cy.request({

//         method: 'POST',
//         url: '/portal/login',
//         body:{
//             user:{
//                 email: 'andybary@mail.com',
//                 password: 'test1234'
//             }
//         }
//     })
//         .then((resp) => {
//             window.localStorage.setItem('jwt', resp.body.user.token)
//         })
// })