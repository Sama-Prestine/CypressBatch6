contex( 'saucelab', () => {

    describe('Standard user', () => {

        it('Should lon in with correct cridentials', () => {

            cy.visit ('https://www.saucedemo.com/')
            cy.get ('#user-name').type (standard_user)
            cy.get ('#password').type ('secret_sauce')
            cy.get ('#login-button') . click
            
            
        })
        
        
    })
    







})