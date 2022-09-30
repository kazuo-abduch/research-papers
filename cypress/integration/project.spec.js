describe('1 - Adicione à página o título "Paleta de Cores"', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  it('Verifica se contém um elemento `h1` com o id `title` com o título correto', () => {
    cy.get('h1#HOME').should('contain.text', 'HOME');
  });
});