describe('template spec', () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Impede que o Cypress falhe o teste em caso de exceções não capturadas
    });

    // Visita a página de login
    cy.visit('https://acesso.evolutto.com.br/');
    
    // Preenche os campos de login e submete o formulário
    cy.get('[id="username"]').type('van.lacerenza55555555@gmail.com');
    cy.get('[id="password"]').type('Senha@1234');
    cy.get('button[type="submit"]').click();
    
    // Espera a página carregar completamente
    cy.url().should('include', '/areacliente');

    // Espera até que o elemento esteja disponível e clica na div específica
    cy.get('div.styled__NotImageBox-sc-65cqp3-4.ghpWqo', { timeout: 10000 })
      .click({ force: true });

    // Espera até que a nova página seja carregada completamente
    cy.url().should('include', 'https://acesso.evolutto.com.br/v3/projects/2b2f7720-75d6-4c6b-8a7e-be3b42d889c6');
    cy.wait(2000); // Espera 2 segundos para garantir que a página tenha carregado completamente

    // Clique no botão "Continuar de onde parei"
    cy.get('a.container-header__button-status__container__continuar__button').should('be.visible').click();

    // Espera até que a nova página carregue completamente
    cy.url().should('include', '/v3/projects/contents/');
    cy.wait(2000); // Espera 2 segundos para garantir que a página tenha carregado completamente

    // Clicar no elemento específico
    cy.contains('Aprovação da Tarefa (Clique para Solicitar Aprovação/Liberação)').click();

    // Pausa para manter a página aberta
    cy.wait(5000); // Aguarda 5 segundos, ajuste conforme necessário

    // Digitar "teste" no campo de texto
    cy.get('textarea.chat--message-input--mention__input').type('teste', { force: true });

    // Clicar no botão de envio
    cy.get('div.send-button-bt').click();

    // Agora, para fechar a modal, clique no elemento que representa o ícone de fechar
    cy.get('path[d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]').click();

    // Tentar clicar no elemento <p>
    cy.contains('Cadastro de Unidades').click({ force: true });

    // Pausa final para manter a página aberta
    cy.pause();
  });
});
