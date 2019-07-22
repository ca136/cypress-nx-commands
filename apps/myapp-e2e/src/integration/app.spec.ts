import { getGreeting } from '../support/app.po';

describe('myapp', () => {
  beforeEach(() => cy.visit('/'));

  cy.login();

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to myapp!');
  });
});
