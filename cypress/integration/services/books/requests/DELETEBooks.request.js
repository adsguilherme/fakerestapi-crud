/// <reference types="cypress" />

function deleteBooks(idBook) {
  return cy.request({
    method: 'DELETE',
    url: `Books/${idBook}`,
    failOnStatusCode: false
  })
}

export { deleteBooks }
