describe('página de login', () => {
    it('Verificar mensagem de campo obrigatório', () => {
      // Visita a página inicial
      cy.visit('http://localhost:4200/#/home');
      
      // Verifica se as mensagem de erro da página de login estão visíveis
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    });
  });
  