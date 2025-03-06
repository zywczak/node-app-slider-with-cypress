describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if slides are swiped correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});



describe('Swiper Gallery Tests', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Checks if second slide contains "United Kingdom"', function () {
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });

  it('Checks if third slide contains "Paris"', function () {
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });

  it('Ensures navigation buttons work properly', function () {
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });

  it('Verifies each slide has a title and description', function () {
    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];
    
    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click();
        cy.wait(500);
      }
      cy.get('.swiper-slide-active').should('contain', slide.title);
      cy.get('.swiper-slide-active').should('contain', slide.description);
    });
  });

  it('Checks if gallery adapts to different screen sizes', function () {
    const viewports = [
      [1920, 1080], // Desktop
      [1024, 768],  // Tablet
      [375, 667]    // Mobile
    ];

    viewports.forEach((size) => {
      cy.viewport(size[0], size[1]);
      cy.wait(500);
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-slide-active').should('exist');
    });
  });

  it('Ensures gallery is displayed correctly', function () {
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');
  });
});
