/// <reference types="cypress" />

import * as DELETEBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

context('DELETE Books', () => {
  it('Deletar um livro', () => {
    GETBooks.allBooks().then((responseAllBooks) => { // Antes do DELETE se faz um GET
      DELETEBooks.deleteBooks(responseAllBooks.body[0].id).should((responseDeleteBooks) => { // Faz um DELETE no primeiro item da lista -> body[0].
        expect(responseDeleteBooks.status).to.eq(200)
      })
    })
  })


  it('Criar e excluir um livro', () => {
    POSTBooks.addBooks().then((responseAddBooks) => {
      DELETEBooks.deleteBooks(responseAddBooks.body.id).should((responseDeleteBooks) => {
        expect(responseDeleteBooks.status).to.eq(200)
      })
    })
  })

})