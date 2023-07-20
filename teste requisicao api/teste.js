// Importe a função obterTodosProjetos usando a sintaxe CommonJS
const { obterTodosProjetos } = require('./projectService');
const { criarProjeto } = require('./projectService');
const { obterProjetoPorId } = require('./projectService');
const { atualizarProjeto } = require('./projectService');
const { deletarProjetoPorId } = require('./projectService');

// Resto do código permanece o mesmo
async function obterMeusProjetos() {
  try {
    const projetos = await obterTodosProjetos();
    console.log('Projetos obtidos com sucesso:', projetos);
  } catch (error) {
    console.error('Erro ao obter projetos:', error.message);
  }
}

const projetoData = {
    title: 'Projeto cara',
    quantity: 7,
  };
  
async function criarMeuProjeto() {
    try {
      // Chame a função criarProjeto com os dados do projeto
      const novoProjeto = await criarProjeto(projetoData);
      
      // Imprima a resposta ou faça o que for necessário com o novoProjeto
      console.log('Projeto criado com sucesso:', novoProjeto);
    } catch (error) {
      // Em caso de erro, imprima a mensagem de erro
      console.error('Erro ao criar o projeto:', error.message);
    }
  }

  async function obterMeuProjeto(id) {
    try {
      // Chame a função criarProjeto com os dados do projeto
      const novoProjeto = await obterProjetoPorId(id);
      
      // Imprima a resposta ou faça o que for necessário com o novoProjeto
      console.log('Projeto obtido por id com sucesso:', novoProjeto);
    } catch (error) {
      // Em caso de erro, imprima a mensagem de erro
      console.error('Erro ao obter projeto por id:', error.message);
    }
  }

  const atualizarProjetoData = {
    id: 17592186045420,
    title: 'Projeto atualizado',
    quantity: 1743,
  };

  async function atualizarMeuProjeto() {
    try {
      // Chame a função criarProjeto com os dados do projeto
      const novoProjeto = await atualizarProjeto(atualizarProjetoData);
      
      // Imprima a resposta ou faça o que for necessário com o novoProjeto
      console.log('Projeto atualizado com sucesso:', novoProjeto);
    } catch (error) {
      // Em caso de erro, imprima a mensagem de erro
      console.error('Erro ao atualizar o projeto:', error.message);
    }
  }

  async function deletarMeuProjeto(id) {
    try {
      // Chame a função criarProjeto com os dados do projeto
      const novoProjeto = await deletarProjetoPorId(id);
      
      // Imprima a resposta ou faça o que for necessário com o novoProjeto
      console.log('Projeto deletado com sucesso:', novoProjeto);
    } catch (error) {
      // Em caso de erro, imprima a mensagem de erro
      console.error('Erro ao deletar o projeto:', error.message);
    }
  }

criarMeuProjeto();

obterMeusProjetos();

obterMeuProjeto(17592186045420);

atualizarMeuProjeto();

deletarMeuProjeto(17592186045420);
