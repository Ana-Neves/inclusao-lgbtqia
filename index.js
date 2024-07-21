const express = require('express');
const app = express();
const port = 3000;


app.get('/vagas-inclusivas', (req, res) => {
    const vagas = [
        { empresa: 'Banco do Brasil', cargo: 'Analista de Sistemas', local: 'São Paulo, SP' },
        { empresa: 'Grupo B2W Digital', cargo: 'Desenvolvedor(a) de Software', local: 'Rio de Janeiro, RJ' },
        { empresa: 'Magazine Luiza', cargo: 'Gerente de E-commerce', local: 'São Paulo, SP' },
        { empresa: 'Tivit', cargo: 'Consultor(a) de TI', local: 'São Paulo, SP' },
        { empresa: 'TOTVS', cargo: 'Analista de Suporte Técnico', local: 'São Paulo, SP' },
        { empresa: 'Petrobras', cargo: 'Engenheiro(a) de Projetos', local: 'Rio de Janeiro, RJ' },
        { empresa: 'Ambev', cargo: 'Analista de Marketing', local: 'São Paulo, SP' },
        { empresa: 'Caixa Econômica Federal', cargo: 'Analista de Riscos', local: 'Brasília, DF' },
        { empresa: 'Bradesco', cargo: 'Desenvolvedor(a) de Sistemas', local: 'São Paulo, SP' },
        { empresa: 'Embraer', cargo: 'Engenheiro(a) de Software', local: 'São José dos Campos, SP' },
        { empresa: 'Salesforce', cargo: 'Software Engineer', local: 'San Francisco, CA, USA' },
        { empresa: 'Google', cargo: 'UX Designer', local: 'Mountain View, CA, USA' },
        { empresa: 'Microsoft', cargo: 'Program Manager', local: 'Redmond, WA, USA' },
        { empresa: 'IBM', cargo: 'Data Scientist', local: 'New York, NY, USA' },
        { empresa: 'Cisco', cargo: 'Network Engineer', local: 'San Jose, CA, USA' },
        { empresa: 'Amazon', cargo: 'Product Manager', local: 'Seattle, WA, USA' },
        { empresa: 'Intel', cargo: 'Hardware Engineer', local: 'Santa Clara, CA, USA' },
        { empresa: 'Adobe', cargo: 'Software Developer', local: 'San Jose, CA, USA' },
        { empresa: 'Spotify', cargo: 'Data Analyst', local: 'New York, NY, USA' },
        { empresa: 'Oracle', cargo: 'Cloud Engineer', local: 'Austin, TX, USA' }
    ];

    res.json(vagas);
});



app.get('/direitos-trabalhistas', (req, res) => {
    const direitos = {
        Brasil: 'Direito ao nome social, proteção contra discriminação no trabalho, direito à igualdade de oportunidades e tratamento justo.',
        EUA: 'Proteção contra discriminação com base na orientação sexual e identidade de gênero em muitos estados, embora a cobertura possa variar dependendo do estado.',
        Canadá: 'Proteção contra discriminação baseada em orientação sexual e identidade de gênero, direitos iguais em todos os aspectos do emprego, e acesso a benefícios de saúde para casais do mesmo sexo.',
        Alemanha: 'Proteção contra discriminação no local de trabalho com base em orientação sexual e identidade de gênero, e igualdade de direitos em relação a benefícios e oportunidades de emprego.',
        França: 'Proteção contra discriminação no emprego com base na orientação sexual e identidade de gênero, e acesso a benefícios de saúde para casais do mesmo sexo.',
        Austrália: 'Proteção contra discriminação no trabalho por orientação sexual e identidade de gênero, e acesso igualitário a oportunidades e benefícios de emprego.',
        Suécia: 'Proteção contra discriminação no emprego baseada em orientação sexual e identidade de gênero, e políticas inclusivas para promover igualdade no local de trabalho.',
      };
      
  res.json(direitos);
});


app.get('/programas-mentoria', (req, res) => {
    const programas = [
        { nome: 'Programa de Mentoria LGBTQIA+ A', descricao: 'Conectando mentores LGBTQIA+ a jovens profissionais.' },
        { nome: 'Rede de Suporte LGBTQIA+ B', descricao: 'Apoio e orientação para pessoas LGBTQIA+ no ambiente de trabalho.' },
        { nome: 'Pride Mentorship Program', descricao: 'Um programa de mentoria voltado para profissionais LGBTQIA+, oferecendo orientação, apoio e desenvolvimento de carreira em um ambiente inclusivo.' },
        { nome: 'Transgender Employment Support Program', descricao: 'Suporte especializado para pessoas trans no ambiente de trabalho, incluindo orientação sobre direitos, apoio durante a transição e desenvolvimento de carreira.' },
        { nome: 'LGBTQIA+ Career Coaching Network', descricao: 'Rede de coaching de carreira para pessoas LGBTQIA+, com foco em orientação profissional e apoio na busca de oportunidades de emprego.' },
        { nome: 'Out & Equal Workplace Advocates', descricao: 'Organização que oferece recursos, treinamento e suporte para promover a inclusão LGBTQIA+ no ambiente de trabalho e apoiar líderes e colaboradores.' },
        { nome: 'GLOW (Gay and Lesbian Outreach Program)', descricao: 'Programa de apoio e mentoria para a comunidade LGBTQIA+, com foco em desenvolvimento pessoal e profissional e criação de redes de contato.' },
        { nome: 'LGBTQIA+ Professionals Network', descricao: 'Rede de profissionais LGBTQIA+ que oferece suporte, networking e oportunidades de desenvolvimento profissional, incluindo eventos e workshops de carreira.' },
        { nome: 'Lesbian & Gay Foundation Career Support', descricao: 'Suporte de carreira para a comunidade lésbica e gay, com serviços de aconselhamento de carreira, workshops e recursos para promover o avanço profissional.' },
        { nome: 'Pride at Work', descricao: 'Organização que promove a inclusão LGBTQIA+ no local de trabalho e oferece recursos e programas de mentoria para apoiar profissionais LGBTQIA+ em suas carreiras.' },
        { nome: 'Equality Network', descricao: 'Rede que oferece mentoria, apoio e oportunidades de desenvolvimento para pessoas LGBTQIA+ no ambiente de trabalho, com foco em promover igualdade e inclusão.' },
        { nome: 'Trans Can Work', descricao: 'Programa dedicado a apoiar a comunidade trans no mercado de trabalho, oferecendo orientação, recursos e treinamento para facilitar a inclusão e o sucesso profissional.' },
        { nome: 'LGBTQ+ Mentoring Initiative', descricao: 'Iniciativa de mentoria para jovens LGBTQIA+, conectando-os com mentores experientes que podem fornecer orientação e apoio em suas jornadas profissionais.' },
        { nome: 'Diversify Your Workforce Program', descricao: 'Programa focado em ajudar empresas a diversificar suas equipes, oferecendo recursos e suporte para a inclusão de talentos LGBTQIA+ e criação de ambientes de trabalho acolhedores.' },
        { nome: 'LGBTQ+ Youth Employment Program', descricao: 'Programa que oferece apoio e oportunidades de emprego para jovens LGBTQIA+, com foco em ajudar na transição para o mercado de trabalho e no desenvolvimento de habilidades profissionais.' },
        { nome: 'Inclusive Talent Network', descricao: 'Rede dedicada a conectar talentos LGBTQIA+ com oportunidades de emprego inclusivas, oferecendo suporte e orientação para uma integração bem-sucedida no mercado de trabalho.' },
        { nome: 'Global LGBTQ+ Workplace Equality Initiative', descricao: 'Iniciativa global que promove a igualdade de trabalho para pessoas LGBTQIA+, oferecendo recursos, treinamentos e certificações para empresas em todo o mundo.' }
      ];
      
  res.json(programas);
});



app.listen(port, () => {
  console.log(`API de Inclusão LGBTQIA+ rodando na porta ${port}`);
});
