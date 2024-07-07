describe('página de cadastro', () => {
  it('preencher os campos do form de forma incorreta para ver um erro', () => {
    // Visita a página inicial
    cy.visit('http://localhost:4200/#/home');
    
    // Clica no link "Register now"
    cy.contains('a', 'Register now').click();
    
    // Clica duas vezes no botão "Register" sem preencher o formulário
    cy.contains('button', 'Register').click();
    cy.contains('button', 'Register').click();
    
    // Verifica se a mensagem de erro "Email is required!" está visível
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  });
});
