Cypress.Commands.add('login', (email, password) => { 
    cy.get('[data-test="loginUserName"]').type('nome');
    cy.get('[data-test="loginPassword"]').type('senha');
    cy.contains('button', 'login').click();

})

Cypress.Commands.add('login_evolutto', (email, password) => {
    cy.get('[id="username"]').type(email);
    cy.get('[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
});


