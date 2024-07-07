describe('Api Alurapic', () => {
    it('Dados da API', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/user/login',
            body: Cypress.env()
        }).then((res) => {
            // Verifica se o status da resposta é 200 (OK)
            expect(res.status).to.be.equal(200);

            // Verifica se o corpo da resposta não está vazio
            expect(res.body).is.not.empty;

            // Verifica se o corpo da resposta contém a propriedade 'id'
            expect(res.body).to.have.property('id');

            // Verifica se o valor da propriedade 'id' na resposta é igual a 5
            expect(res.body.id).to.be.equal(5);
        });
    });
});



// onde vamos proteger nossos dados, para não serem mostrados
// após o login? 

// em cypress.env.json