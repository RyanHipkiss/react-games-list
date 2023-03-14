describe('Game Search Form', () => {
  it('renders the Game Search Form', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="GameSearchForm"]').should('exist')
  })

  it('detects changes to the game search form input', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="GameSearchFormInput"]').type('Overwatch')
    cy.get('[data-testid="GameSearchFormInput"]').should('have.value', 'Overwatch')
  })

  it('Filters the list correctly when typing in the search box', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="GameSearchFormInput"]').type('Overwatch')
    cy.get('[data-testid="CardTitle"]').then(($listItems) => {
      $listItems.each((index, $listItem) => {
        expect($listItem).to.contain('Overwatch')
      })
    })
  })
})