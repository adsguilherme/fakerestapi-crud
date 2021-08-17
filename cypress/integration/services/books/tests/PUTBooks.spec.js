/// <reference types="cypress" />

import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

context('PUT Books', () => {
  it('Alterar um livro', () => {
    GETBooks.allBooks().then((responseAllBooks) => {
      PUTBooks.updateBook(responseAllBooks.body[0].id).should((responseUpdatedBooks) => {
        expect(responseUpdatedBooks.status, 'Status retornado').to.eq(200)
        expect(responseUpdatedBooks.body, 'Retorno não deve ser nulo').to.be.not.null
        expect(responseUpdatedBooks.body.title, 'Título do Livro').to.eq('Cronicas de Jingle Bells - UPDATE')
      })
    })
  })
  
  it('Criar e alterar um livro', () => {
    POSTBooks.addBooks().then((responseAddBooks) => {
      PUTBooks.updateBook(responseAddBooks.body.id).should((responseUpdatedBooks) => {
        expect(responseUpdatedBooks.status, 'Status retornado').to.eq(200)
        expect(responseUpdatedBooks.body, 'Retorno não deve ser nulo').to.be.not.null
        expect(responseUpdatedBooks.body.title, 'Título do Livro').to.eq('Cronicas de Jingle Bells - UPDATE')
      })
    })
  })  
  

})