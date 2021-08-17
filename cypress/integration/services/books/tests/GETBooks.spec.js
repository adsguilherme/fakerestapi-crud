/// <reference types="cypress" />

import * as GETBooks from '../requests/GETBooks.request'

context('GETBooks', () => {
  it('Listar todos os livros', () => {
    GETBooks.allBooks().should((response) => {
      expect(response.status, 'Status retornado').to.eq(200)
      expect(response.body, 'Retorno não deve ser nulo').to.be.not.null
    })
  })
})