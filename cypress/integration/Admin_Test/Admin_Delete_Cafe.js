describe('Test Admin User Can delete a cafe', () => {
    it('Visits the Coffiends', () => {
      cy.visit('https://coffiends.herokuapp.com/')
      cy.get('input[name=username]').type('admin@coffiends.com')
      cy.get('input[name=password]').type('password{enter}')
      cy.wait(2000)
      cy.get('input[type="text"]').eq(0).type('Bob')
      cy.get('.btn').contains("Delete").click()
    })
  })