/// <reference types="cypress" />

const PAYLOAD_UPDATE_BOOK = require('../payloads/update-book .json')

function updateBook(idBook) {
  return cy.request({
    method: 'PUT',
    url: `Books/${idBook}`,
    failOnStatusCode: false,
    headers: {
      'content-type': 'application/json; charset=utf-8; v=1.0'
    },
    failOnStatusCode: false,
    body: PAYLOAD_UPDATE_BOOK
  })
}

export { updateBook }