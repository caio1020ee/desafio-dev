# Desafio Desenvolvedor Júnior TI 2022/2

<img alt="GoStack" src="https://www.voitto.com.br/assets/videos/home_header.jpg" />

<h2 align="center">
  Dashboard de Alunos
</h2>

<p align="center">”A dedicação é a chave para o sucesso”</p>

<p align="center">

  <a href="https://www.voitto.com.br" target="_blank">
    <img alt="Made by Grupo Voitto" src="https://img.shields.io/badge/made%20by-Grupo Voitto-%23000">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%23000">

  <a href="https://github.com/Grupo-Voitto/desafio-estagio/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Grupo-Voitto/desafio-estagio?style=social">
  </a>
</p>


## Sobre o desafio

Nesse desafio, você deve criar uma aplicação que integre uma API REST com uma interface web, utilizando Node.js e Next.js.

Essa será uma aplicação para controle de alunos, onde possibilite listar, cadastrar e excluir alunos, além de poder atribuir cursos e visualizar todos os cursos de um aluno.

Também existe um teste de lógica para poder apresentar melhor seu raciocínio com programação. 

## Template da aplicação

Para te ajudar nesse desafio, criamos um modelo que você deve utilizar como um template do Github.

O template está disponível na seguinte url: **[Acessar Template](https://github.com/grupovoitto/desafio-dev-jr)**

**Dica**: Utilize o botão 'use this template';

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal, nas pastas `web` e `api`, para instalar todas as dependências de ambas aplicações.

Na pasta `api`, crie um arquivo `.env` com base no `.env-example`. Lá você deve colocar as variáveis que referenciem o seu banco de dados local.

Lembre-se também de importar o banco de dados utilizando o arquivo `desafio-voitto.sql` disponível na raiz do projeto. O foco é o uso de SQL em bancos relacionais, caso faça a aplicação usando um banco não relacional (Mongo por exemplo), será descontados "pontos" no critério de avaliação, porém ainda sim será avaliado.

Após ter configurado o banco e com os pacotes instalados, você poderá iniciar as aplicações do desafio da seguinte forma:
   
   - Para iniciar a api entre na pasta "api" e digite o comando `yarn run dev`
   
   - Para iniciar o front-end entre na pasta "frontend" e digite o comando `yarn dev`

Após esses passos você conseguirá ver as intruções para realizar o desafio no endereço usado para rodar o front-end, que deve ser `http://localhost:3000/`;

## Sobre a aplicação

Serão realizados 4 testes:


### Teste de lógica

Aqui, você terá que criar uma buscador em uma sequência não fibonacci.

Se você não conhece, o vetor de Fibonacci consiste na soma dos últimos
dois algarismos da mesma equação:

```
   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
```

O objetivo desse exercício é trazer o enésimo número não pertencente à
esta sequência.

Se digitar 0: deve retornar erro. Se digitar 1, deve aparecer 4. Se
digitar 2, deve aparecer 6. E assim por diante.

### API

Aqui, você terá que criar uma API REST utilizando as boas práticas.

- Você vai precisar criar simplesmente a conexão local do seu servidor ( api ) com o seu banco de dados. Lembre-se de usar o voitto_desafio.sql é ele que possui nossa estrutura pronta
  - Uma dica, pode ser usar a conexão XAMPP + MySQL workbench

- Após ter feito toda a conexão, basta apenas criar as rotas e o sistema de  CRUD ( CREATE READ UPDATE E DELETE) e integrar com o frontend

- Crie um sistema de login com autenticação, simples.
  - crie o endpoint criação de conta
  - crie o endpoint de login
  - E o endpoint de refatoração de senha, não é necessário, mas caso queira incrementar adicione o nodemail ( https://nodemailer.com/about/) onde vc enviará uma confirmação de de email da forma que achar melhor
  - A senha não pode ter menos de 8 digitos

### Teste Web

Aqui você terá que criar um admin de alunos onde deve **listar**, **cadastrar** e **excluir** alunos, além de poder **atribuir cursos e visualizar todos os cursos de um aluno**.

- Lembre-se de criar o sistema de Login no frontend com as informações relevantes e tratativas de erro para as regras definidas no nosso backend

### Teste SEO

Aqui você terá que lidar com uma "mini página" de "artigo". O intuito é que você deixe essa página o mais performática, usual e responsiva aos olhos do padrão do google de boas práticas para as paginas.

- Lembre-se SEO é fundamentalmente um sistema de METATAGS
- Não se esqueça da acessibilidade
- Se atente a hierarquia e estruturação do HTML
- Abuse dos components fornecidos pelas tecnologias

## Regras do teste

- Você pode fazer o que quiser com o projeto: criar novos componentes ou páginas, baixar bibliotecas, refatorar código. Se for bem feito, será bem visto. Contudo, se não precisar, tudo bem.

- Alguns layouts foram propositalmente colocados com divergência do resto do código, seria interessante se gastassem um tempo melhorando esses pontos de discrepância.

- Se atentem ao layout responsivo (mobile first pode ser uma alternativa plausível)


## :calendar: Entrega

Esse desafio deve ser entregue via email. 

Envie com o assunto `Desafio Dev Jr TI 2022/2`. O corpo do email deve possuir o link para o seu repositório do Github contendo a solução.

O prazo para resolução está no email enviado por ti@voitto.com.br.


OBS: Envivem o projeto mesmo que não tenham o terminado por completo, tudo será avaliado e pontuado. Abusem da criatividade ! 

## Dúvidas e Sugestões

Deixamos um desenvolvedor da empresa disposto a ajudar você nessa jornada:

 - **[Henrico Piubello](https://github.com/henricop)** - hpiubello@gmail.com
 - **[Rafael Menegheti](https://github.com/rafamenegheti)** - rafaelmenegheti51@gmail.com
 - **[Luiz Henrique](https://github.com/lhuizf)** - luizhff@gmail.com




---

Feito com :heart: by Grupo Voitto
