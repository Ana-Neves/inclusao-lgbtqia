const express = require('express');
const app = express();
const port = 3000;


app.get('/vagas-inclusivas', (req, res) => {
  const vagas = [
    { empresa: 'Empresa Inclusiva A', cargo: 'Desenvolvedor(a) Front-end', local: 'Remoto' },
    { empresa: 'Empresa Inclusiva B', cargo: 'Gerente de Projetos', local: 'São Paulo, SP' }
  ];
  res.json(vagas);
});


app.get('/direitos-trabalhistas', (req, res) => {
  const direitos = {
    Brasil: 'Direito ao nome social, proteção contra discriminação no trabalho...',
    EUA: 'Proteção contra discriminação com base na orientação sexual e identidade de gênero...'
  };
  res.json(direitos);
});


app.get('/programas-mentoria', (req, res) => {
  const programas = [
    { nome: 'Programa de Mentoria LGBTQIA+ A', descricao: 'Conectando mentores LGBTQIA+ a jovens profissionais.' },
    { nome: 'Rede de Suporte LGBTQIA+ B', descricao: 'Apoio e orientação para pessoas LGBTQIA+ no ambiente de trabalho.' }
  ];
  res.json(programas);
});



app.listen(port, () => {
  console.log(`API de Inclusão LGBTQIA+ rodando na porta ${port}`);
});
