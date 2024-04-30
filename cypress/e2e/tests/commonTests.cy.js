describe('Common Testing Utilities', ()=>{
    it('File Upload Test', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile('cypress/fixtures/IMG.jpg', { action: 'drag-drop' })
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('IMG.jpg')
    })  

    it.only('Verify Tool Tip & CORS Test', () =>{
        cy.visit('https://open.spotify.com');
        cy.get('div.FTiXRW7kAldHmLaxVQ2N').trigger('mouseover').get('#hover-or-focus-tooltip').should('have.text','Collapse Your Library')
    })
})