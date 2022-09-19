import { logicTestText, rules, studentsText } from '@/constants/Texts';
import React from 'react';

import { Container } from './styles';

const Intro: React.FC = () => {
  return (
    <Container>
      <h2> Regras do projeto Web</h2>
      <p>É fundamental que as regras a seguir sejam seguidas</p>

      <ol>
        {rules.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <h2>Teste de Lógica</h2>
      <p>
        Na sessão de "teste de lógica", você deve finalizar o "helper" de
        encontrar o enésimo número de não pertencente ao vetor de Fibonacci.{' '}
      </p>
      {logicTestText}

      <h2>Sistema de admin de alunos</h2>
      <p>
        Na sessão de "alunos", você deve finalizar o sistema de admin que temos
        para os nossos alunos.
      </p>
      {studentsText}
    </Container>
  );
};

export default Intro;
