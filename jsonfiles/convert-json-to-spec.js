const fs = require('fs');
const path = require('path');

// Diretório contendo os arquivos JSON
const jsonDirectory = __dirname;

// Diretório para salvar os arquivos spec
const specDirectory = path.join(__dirname, '..', 'e2e'); // Um nível acima do diretório atual

// Cria o diretório de especificações se não existir
if (!fs.existsSync(specDirectory)) {
  fs.mkdirSync(specDirectory, { recursive: true });
}

// Função para converter JSON para comandos Cypress
function convertJsonToCypressSpec(jsonData) {
  let specContent = `describe('${jsonData.title}', () => {\n`;

  jsonData.steps.forEach((step, index) => {
    specContent += `  it('Step ${index + 1}', () => {\n`;
    
    if (step.type === 'setViewport') {
      specContent += `    cy.viewport(${step.width}, ${step.height});\n`;
    } else if (step.type === 'navigate') {
      specContent += `    cy.visit('${step.url}');\n`;
    } else if (step.type === 'click') {
      specContent += `    cy.get('${step.target}').click();\n`;
    } else if (step.type === 'change') {
      specContent += `    cy.get('${step.target}').type('${step.value}');\n`;
    }

    // Adicionar asserções, se houver
    if (step.assertedEvents) {
      step.assertedEvents.forEach(event => {
        specContent += `    // Assertion: ${event.type} - ${event.url}\n`;
      });
    }

    specContent += `  });\n`;
  });

  specContent += `});\n`;

  return specContent;
}

// Nome do arquivo JSON que você deseja processar
const jsonFileName = 'login_evolutto.json'; // Substitua pelo nome do seu arquivo JSON

// Caminho completo para o arquivo JSON
const jsonFilePath = path.join(jsonDirectory, jsonFileName);

// Verifica se o arquivo JSON existe
if (fs.existsSync(jsonFilePath)) {
  try {
    // Lê e parseia o conteúdo do arquivo JSON
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    // Nome do arquivo sem a extensão .json
    const fileNameWithoutExtension = path.basename(jsonFileName, '.json');
    const specFilePath = path.join(specDirectory, `${fileNameWithoutExtension}-spec.js`);
    const specContent = convertJsonToCypressSpec(jsonData);

    // Escreve o conteúdo convertido no arquivo de especificação
    fs.writeFileSync(specFilePath, specContent);
    console.log(`Spec file generated at: ${specFilePath}`);
  } catch (error) {
    console.error('Erro ao ler ou parsear o arquivo JSON:', error);
  }
} else {
  console.error(`Arquivo não encontrado: ${jsonFilePath}`);
}
