const mockFavorites = require('../Mock/favoritesMock.json');
const { _type, _source: { authors, description, title } } = mockFavorites;

describe('Verifica existência dos botões Home e Favorites com o ID correto', () => {
  beforeEach(() => {
    cy.fixture('apiMock').then((apiMock) => {
      cy.intercept('GET', 'https://core.ac.uk/api-v2/search/**', {
        status: 200,
        body: apiMock
      }).as('apiMock')
      cy.visit('http://localhost:3000/');
    })
  });

  it('Verifica se contém um elemento `h1` com o id `title` com o título correto', () => {
    cy.get('div#HOME').should('contain.text', 'HOME');
  });
  it('Verifica se contém um elemento `h1` com o id `title` com o título correto', () => {
    cy.get('div#FAVORITES').should('contain.text', 'FAVORITES');
  });
});

describe('Verifica se os botões alteram a rota da aplicação', () => {
  beforeEach(() => {
    cy.fixture('apiMock').then((apiMock) => {
      cy.intercept('GET', 'https://core.ac.uk/api-v2/search/**', {
        status: 200,
        body: apiMock
      }).as('apiMock')
      cy.visit('http://localhost:3000/');
    })
  });

  it('Verifica funcionalidade do botão "favorites"', () => {
    cy.get('div#FAVORITES').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/favorites'));
  });

  it('Verifica se contém um elemento `h1` com o id `title` com o título correto', () => {
    cy.get('div#FAVORITES').click();
    cy.get('div#HOME').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/'));
  });
});

describe('Verifica se o botão de favoritar salva o obj no localSotrage', () => {
  beforeEach(() => {
    cy.fixture('apiMock').then((apiMock) => {
      cy.intercept('GET', 'https://core.ac.uk/api-v2/search/**', {
        status: 200,
        body: apiMock
      }).as('apiMock')
      cy.visit('http://localhost:3000/');
    })
  });

  it('Verifica funcionalidade do botão para favoritar', () => {
    cy.get('.fav-button').eq(0).click().should(() => {
      expect(localStorage.getItem('favorite-documents')).to.not.equal(null);
    });
    cy.visit('http://localhost:3000/favorites');
    cy.get('#type-id').should('contain.text', `Type: ${_type}`);
    cy.get('#title-id').should('contain.text', `Title: ${title}`);
    cy.get('#description-id').should('contain.text', `Description: ${description}`);
    cy.get('#authors-id').should('contain.text', `Authors: ${authors.reduce((acc, curr) => `${acc}${curr}`)}`);
  });
});