const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  },
});

module.exports = defineConfig({
  // 1. Defina o reporter aqui
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
    reportDir: 'cypress/reports', // Onde o relatório será salvo
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,
    inlineAssets: true, // Cria um arquivo HTML único (fácil de compartilhar)
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // 2. Adicione o plugin aqui dentro do setupNodeEvents
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    // ... restante da sua configuração (baseUrl, etc)
  },
});