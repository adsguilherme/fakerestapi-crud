/// <reference types="cypress" />

const PAYLOAD_ADD_BOOK = require('../payloads/add-book.json')

function addBooks() {
  return cy.request({
    method: 'POST',
    url: 'Books',
    failOnStatusCode: false,
    body: PAYLOAD_ADD_BOOK
  })
}

export { addBooks }