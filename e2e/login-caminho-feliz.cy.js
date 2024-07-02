describe('Página de login', () => {
    it('preencher os campos de login', () => {
      cy.visit('http://localhost:4200/#/home');
      cy.get('[data-test="loginUserName"]').type('vanessalacerenza');
      cy.get('[data-test="loginPassword"]').type('oliviapalito');
      cy.contains('button', 'login').click();
    });
    
    
  });
  