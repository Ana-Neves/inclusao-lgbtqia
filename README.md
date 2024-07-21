
Copy code
# 🌈 LGBTQIA+ Inclusion API

Welcome to the **LGBTQIA+ Inclusion API** 🚀 repository, an API developed to promote inclusion and diversity in the job market. This API provides information on inclusive job listings, labor rights for LGBTQIA+ individuals, and mentorship and support programs.

## Features

The API offers the following endpoints:

- **GET /inclusive-jobs** 🧑‍💻
  - Returns a list of inclusive job openings.
  - Example response:
       ```json
       [
      {
        "empresa": "Empresa Inclusiva A",
        "cargo": "Desenvolvedor(a) Front-end",
        "local": "Remoto"
      },
      {
        "empresa": "Empresa Inclusiva B",
        "cargo": "Gerente de Projetos",
        "local": "São Paulo, SP"
      }
    ]
     ```


- **GET /labor-rights** ⚖️
  - Provides information about labor rights for LGBTQIA+ individuals in different countries.
  - Example response:
    ```json
    {
      "Brasil": "Direito ao nome social, proteção contra discriminação no trabalho...",
      "EUA": "Proteção contra discriminação com base na orientação sexual e identidade de gênero..."
    }
    ```

- **GET /mentorship-programs** 🎓
  - Lists mentorship and support programs available for the LGBTQIA+ community.
  - Example response:
    ```json
    [
      {
        "nome": "Programa de Mentoria LGBTQIA+ A",
        "descricao": "Conectando mentores LGBTQIA+ a jovens profissionais."
      },
      {
        "nome": "Rede de Suporte LGBTQIA+ B",
        "descricao": "Apoio e orientação para pessoas LGBTQIA+ no ambiente de trabalho."
      }
    ]

    ```

## Project Setup

To run this API locally, follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher) 🖥️
- [npm](https://www.npmjs.com/) (Node Package Manager) 📦

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inclusao-lgbtqia-api.git
   cd inclusao-lgbtqia-api
Install the dependencies:
bash
Copy code
npm install
Running
To start the server, execute:

bash
Copy code
node index.js
The server will start at http://localhost:3000 🌐.

### Testing the API
You can test the endpoints using a browser or a tool like Postman 🛠️.

Inclusive Jobs: http://localhost:3000/vagas-inclusivas
Labor Rights: http://localhost:3000/direitos-trabalhistas
Mentorship Programs: http://localhost:3000/programas-mentoria

### Contribution
Contributions are welcome! To contribute, please follow these steps:

Fork the repository 🍴.
Create a new branch (git checkout -b my-contribution).
Make your changes and add tests if possible.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin my-contribution).
Open a Pull Request on GitHub.

### License
This project is licensed under the MIT License 📝.


Thank you for checking out the LGBTQIA+ Inclusion API! Your feedback and contributions are highly appreciated 🙌.
