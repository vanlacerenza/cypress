describe('Api Alurapic', () => {
    // Define um grupo de testes para a API Alurapic

    it('Fotos do usuário', () => {
        // Define um caso de teste específico para verificar as fotos do usuário
        
        cy.request({
            method: 'GET', // Especifica que a requisição é do tipo GET
            url: 'http://localhost:3000/vanessalacerenza/photos', // Define a URL da API que será requisitada
            headers: {
                'Accept': 'text/html'
            }
        }).then((res) => {
            // Lida com a resposta da requisição
            
            expect(res.status).to.be.equal(200); 
            // Verifica se o status da resposta é 200 (OK)
            
            if (res.headers['content-type'].includes('text/html')) {
                // Verifica se o cabeçalho 'content-type' é 'text/html'
                expect(res.body).to.include('Sorry, no photos');
                // Verifica se o corpo da resposta inclui o texto 'Sorry, no photos'
            } else {
                expect(res.body).to.be.empty;
                // Verifica se o corpo da resposta está vazio
            }
        });
    });
});
