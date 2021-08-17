/// <reference types="cypress" />

import * as POSTBooks from '../requests/POSTBooks.request'

context('POST Books', () => {
  it('Adicionar um novo livro', () => {
    POSTBooks.addBooks().should(response =>{
      expect(response.status, 'Status retornado').to.eq(200)
      expect(response.body.title, 'Título do Livro').to.eq('Cronicas de Jingle Bells')
    })
    
  })
})