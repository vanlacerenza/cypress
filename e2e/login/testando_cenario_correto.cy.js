describe('registro correto', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a', 'Register now').click();
    cy.get('[formcontrolname="email"]').type('van.lacerenza@gmaill.com');
    cy.get('[formcontrolname="fullName"]').type('Vanessa Lacerenza');
    cy.get('[formcontrolname="userName"]').type('vanessalacerenza');
    cy.get('[formcontrolname="password"]').type('oliviapalito');
    cy.contains('button', 'Register').click();
    
    // Adiciona uma pausa após o registro
    cy.pause();
  });
});
