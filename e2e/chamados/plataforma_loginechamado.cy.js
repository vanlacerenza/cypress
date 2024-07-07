describe('template spec', () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // retornar false aqui impede que o Cypress falhe o teste
      return false
    })

    // Login
    cy.visit('  ')
    cy.get('[id="username"]').type('van.lacerenza@gmail.com')
    cy.get('[id="password"]').type('1234')
    cy.get('button[type="submit"]').click()

    // Esperar pela página de dashboard carregar
    cy.url().should('include', '/adm/consultores/gestao/dashboard')

    // Clicar no botão "Projetos"
    cy.get('#mpContratos').find('a.dropdown-toggle').contains('Projetos').click()

    // Esperar pela página de contratos carregar
    cy.url().should('include', '/adm/contratos/')

    // Digitar o ID do projeto no campo de busca e pressionar Enter
    cy.get('input[name="buscar"]').type('301315{enter}')

    // Redirecionar para a página do projeto e esperar carregar
    cy.visit('https://acesso.evolutto.com.br/adm/contratos/raio-x/301315/')
    cy.url({ timeout: 20000 }).should('include', '/adm/contratos/raio-x/301315/')

    // Clicar no botão "Criar chamado"
    cy.contains('button', 'Criar chamado').click()

    // Digitar "teste" no input de título
    cy.get('input.form-control').type('teste')

    // Escrever "test" na div
    cy.get('.public-DraftEditor-content').type('test')

    // Clicar no botão "Enviar como..."
    cy.get('button.btn-success').click()

    // Escolher "Pendente especialista" na div
    cy.get('.chamado-nova-interacao-enviar-opcoes__list-item').contains('Pendente especialista').click()
  })
})
describe('template spec', () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // retornar false aqui impede que o Cypress falhe o teste
      return false
    })

    // Login
    cy.visit('https://acesso.evolutto.com.br/')
    cy.get('[id="username"]').type('van.lacerenza@gmail.com')
    cy.get('[id="password"]').type('1234')
    cy.get('button[type="submit"]').click()

    // Esperar pela página de dashboard carregar
    cy.url().should('include', '/adm/consultores/gestao/dashboard')

    // Clicar no botão "Projetos"
    cy.get('#mpContratos').find('a.dropdown-toggle').contains('Projetos').click()

    // Esperar pela página de contratos carregar
    cy.url().should('include', '/adm/contratos/')

    // Digitar o ID do projeto no campo de busca e pressionar Enter
    cy.get('input[name="buscar"]').type('301315{enter}')

    // Redirecionar para a página do projeto e esperar carregar
    cy.visit('https://acesso.evolutto.com.br/adm/contratos/raio-x/301315/')
    cy.url({ timeout: 10000 }).should('include', '/adm/contratos/raio-x/301315/')

    // Clicar no botão "Criar chamado"
    cy.contains('button', 'Criar chamado').click()

    // Digitar "teste" no input de título
    cy.get('input.form-control').type('teste')

    // Escrever "test" na div
    cy.get('.public-DraftEditor-content').type('test')

    // Clicar no botão "Enviar como..."
    cy.get('button.btn-success').click()

    // Escolher "Pendente especialista" na div
    cy.get('.chamado-nova-interacao-enviar-opcoes__list-item').contains('Pendente especialista').click()
  })
})
