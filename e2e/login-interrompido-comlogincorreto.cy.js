describe('Página de login', () => {
    beforeEach(() => {
        // Visita a URL da página de login antes de cada teste
        cy.visit('https://acesso.evolutto.com.br/');
    });

    it('Deve exibir mensagem de erro ao tentar fazer login com dados corretos', () => {
        // Intercepta a requisição POST para o endpoint de login da Evolutto e retorna um status 400
        cy.intercept('POST', 'https://acesso.evolutto.com.br/p/login_check', {
            statusCode: 400
        }).as('stubPost');

        // Usando o comando customizado para tentar realizar o login com dados corretos
        cy.login_evolutto('van.lacerenza@gmail.com', '1234'); // Usando o comando customizado 'login_evolutto'

        // Espera um curto período de tempo para a aplicação processar a tentativa de login
        cy.wait(2000); // Ajuste conforme necessário

        // Verifica se a mensagem de erro está visível na tela
        cy.contains('Atenção! Usuário e/ou senha inválidos').should('be.visible');

        // Aguarda a interceptação da requisição POST
        cy.wait('@stubPost');
    });
});
