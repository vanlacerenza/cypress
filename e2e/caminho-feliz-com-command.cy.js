// Define um conjunto de testes para a página de login
describe('Página de login', () => {

    // Antes de cada teste, navegue até a página inicial do site
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home') // Visita a URL especificada
    })

    // Teste para preencher os campos de login corretamente e realizar o login
    it('Preencher os campos de login corretamente para realizar login', () => {
        cy.login('vanessalacerenza', 'oliviapalito') // Chama a função customizada de login com as credenciais fornecidas que está em commands.js
    })

})
