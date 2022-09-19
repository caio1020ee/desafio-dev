import React from 'react';

import {
  Container,
} from './styles';


const PostsOfBlog: React.FC = () => {
  return (
    <Container>
      <div id="title-description">
        <p>o incrível mundo de gumball</p>
        <small>
         O Incrivel Mundo de Gumball é uma série de desenho animado <a href='https://www.cna.com.br/blog/estudos/ingl%C3%AAs-britanico-e-americano-entenda-as-diferen%C3%A7as' rel="doFollow"> britânico-americana</a> criada por Ben Bocquelet para o Cartoon Network. 
         A série gira em torno de Gumball Watterson, um gato azul de 12 anos de idade, que frequenta a escola secundária na cidade fictícia de Elmore
        </small>
      </div>
      <div id="main-image">
        <img src="./oIncrivelMundo.png"/>
      </div>
      <p>Animação de O Incrível Mundo de Gumball</p>
      <p>
        Os primeiros dez episódios foram animados ligeiramente diferente dos episódios posteriores. Todos os episódios têm meios mistos, com <a href='https://www.infoescola.com/repteis/dinossauros/'>dinossauros</a> 3D, misturados com bolas de argila, flores e fantasmas 3D, e aranhas 8-bits. No entanto, as animações dos personagens 2D tornaram-se um pouco mais instáveis e cartunescas do que os movimentos mais realistas do primeiro episódio. O corpo de Gumball também muda de forma ligeiramente, com as presas arredondadas e os olhos ligeiramente menores do que antes, o que mudou no final da primeira temporada, já que as animações nos últimos 2 episódios dela pareciam menos espasmódicas e mais realistas, juntamente com as presas de Gumball afiadas novamente e seus olhos sendo maiores. Além disso, ao contrário da maioria dos desenhos animados, ele usa fundos do mundo real, devido ao fato de que o criador trabalhou em comerciais para o Reino Unido antes de criar o show, aprendendo a dar um sentimento realista ao fundo.
      </p>
      <h1>Conceito Inicial</h1>
      <p>
        A ideia inical do projeto não teria a forma que que hoje é vista
      </p>
      <h4>
        Mudanças na Escola de Elmore
      </h4>
      <div id="list">
        <p>O logotipo da série tinha um design diferente.</p>
        <p><a href="https://gumball.fandom.com/pt-br/wiki/Tina_Rex" rel="doFollow">Tina</a> tinha uma aparência mais realista e de baixa qualidade.</p>
        <p><a href="https://gumball.fandom.com/pt-br/wiki/Teri" rel="doFollow">Teri</a> foi mais ampla e não estava amassada.</p>
        <p>Idaho tinha uma cor mais clara.</p>
        <p>Tobias tinha cores mais escuras e não tinha lábios.</p>
        <p>Penny tinha galhos mais escuros, além de ter pulseiras verdes em vez de laranja. Ela foi primeiro desenhada sem boca e com os galhos mais para cima da cabeça.</p>
      </div>
      <p>Banco de Imagens</p>
      <div id="imagens">
      <img src="./idaho.png"/>
      <img src="./penny.png"/>
      <img src="./teri.png"/>
      <img src="./tobias.png"/>
      </div>

    </Container>
  );
};

export default PostsOfBlog;
