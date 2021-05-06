describe('Customers Page',() => {
    it('When: I click on Customers -> Customers from the main nav', () => {
        
        cy.visit("/en/customers") 
        cy.check()
        cy.contains('Customers').then(($myElement)=>{

            if(($myElement.is(":hidden"))){
                cy.wait(5000)
                cy.get('.fa.fa-bars').click({force:true}).then(()=>{
                        cy.get('#multiselect_rightAll').click({force:true}).then(()=>{
                            cy.get('#nav-configuration').click({force:true})
                        })
                
                })    
            }
        })


        cy.wait(5000)
        cy.contains('Customers').click({force:true})

        cy.url().should('include','/customers')

        cy.wait(10000)

        cy.contains('Create Customer').should('be.visible')

        cy.get('#list-table_filter').get('input').should('be.visible')

        cy.get('#sidebar-search').should('exist')

        cy.get('.btn.mob-btn-import.btn-import.dropdown-toggle').contains('More').click({force:true}).then(()=>{
            cy.contains('Edit Columns').should('be.visible')

            cy.contains('Import').should('be.visible')

            cy.contains('Export').should('be.visible')
        })

        cy.get('.dataTables_scrollHead .check-all-records').click({force:true}).then(()=>{
            debugger
            cy.contains('Actions').click({force:true}).then(()=>{
                cy.contains('Send Mail').should('be.visible')
                cy.contains('Delete').should('be.visible')
                cy.contains('Update').should('be.visible')
            })
        })

        cy.get('#lv_filter_hide').click({force:true})
        cy.wait(3000)

        cy.get('.dropbtn.btn-import').contains('All').click({force:true}).then(()=>{
            cy.contains('Create View').should('be.visible')
        })
    })
})

