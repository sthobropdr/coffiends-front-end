describe('Test User Can Logout', () => {
    it('Visits the Coffiends', () => {
      cy.visit('https://coffiends.herokuapp.com/')
      cy.get('input[name=username]').type('admin@coffiends.com')
      cy.get('input[name=password]').type('password{enter}')
      cy.wait(3000)
      cy.get(':nth-child(3) > a > .button-color').click() 
    })
  })