class LoopcloudPage {
  // Visit the main page
  visitMainPage() {
      cy.visit('https://sounds.loopcloud.com');
      
  }

  // Select a random product
  selectRandomProduct() {
      cy.get('._ItemTile.carouselItem.css-1wppmpm').then(($elements) => {
          const randomIndex = Math.floor(Math.random() * $elements.length);
          cy.wrap($elements[randomIndex]).click();
          
      });
  }

  // Assertion to check the selected product has 'Buy Pack'
  assertProductSelected() {
      cy.get('.css-faf28n').should('contain', 'Buy Pack');
  }

  // Select 5 samples from the product
  selectFiveSamplesFromProduct() {
      cy.get('.css-1nmp9fl').then(($elements) => {
          const firstFive = Cypress.$($elements).slice(0, 5);
          firstFive.each((index, el) => {
              cy.wrap(el).click();
          });
      });
  }

  // Assertion to check 5 samples were selected from the product
  assertFiveSamplesSelected() {
      cy.get('.css-bffcs').should('contain', '5');
  }

  // Filter results by 'House' and 'Free'
  filterResultsByHouseAndFree() {
      cy.visit('https://sounds.loopcloud.com/');
      cy.get('.tablet-only > .no-mobile > form > .css-4cffwv > #SearchInput')
          .type('House{enter}', {
              force: true
          });
      cy.get('.css-1wvsu1y').contains('FREE').click({
          force: true
      });
      cy.wait(2000);
      cy.get('.css-1nmp9fl').then(($elements) => {
          const el = Cypress.$($elements).get(0);
          cy.wrap(el).click();
          
      });
  }

  // Assertions to check proper filter for 'House' and 'Free'
  assertProperFilter() {
      cy.get('.css-178p0ro').should('contain', 'FREE');
      cy.get('.hover-dark-gray').should('contain', 'House');
      
  }

  // Set max volume to 100
  setMaxVolume() {
      cy.get('.volume').invoke('show').realClick({ x: 10, y: 1 });
      cy.get('.volume').should('have.value', '100');

  }
        
  // Expand the list with items and select random items(2)
  expandAndSelectRandomItems() {
      cy.get('.tablet-only > .css-1qoaowc').click();
      cy.get('.css-16y6y4u').then(($elements) => {
          const length = $elements.length;
          const randomIndex1 = Math.floor(Math.random() * length);
          // Check 1st item 
          const el1 = Cypress.$($elements).get(randomIndex1);
          cy.wrap(el1).click();
          cy.get(el1).should('be.visible');
      
          cy.get('.css-16y6y4u').then(($elements) => {
              let randomIndex2 = Math.floor(Math.random() * length);
        
              // Ensure two different random items
              while (randomIndex1 === randomIndex2) {
                  randomIndex2 = Math.floor(Math.random() * length);
          }
            // Check 2nd item
              const el2 = Cypress.$($elements).get(randomIndex2);
              cy.wrap(el2).click();
              cy.get(el2).should('be.visible');
      
          // Expand and collapse a list
          cy.get('.tablet-only > .css-1qoaowc').click();
          cy.get('.tablet-only > .css-1qoaowc').click();
        })
      } 
  )}
    
  // Clear the selected items list
  clearSelectedItems() {
      cy.get('.css-190krcd').click({force: true});
      cy.visit('https://sounds.loopcloud.com/');
      cy.get('.css-1xy1ptz').should('contain', 'Nothing selected.');
      }
  }

export default LoopcloudPage;