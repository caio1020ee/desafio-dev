import FormResult from '@/components/Molecules/Containers/FormResult';
import React from 'react';

export const logicTestText: JSX.Element = (
  <>
    <p>
      Se você não conhece, o vetor de Fibonacci consiste na soma dos últimos
      dois algarismos da mesma equação:
    </p>
    <FormResult noTitle> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 </FormResult>
    <p>
      O objetivo desse exercício é trazer o enésimo número não pertencente à
      esta sequência.
    </p>
    <p>
      Se digitar 0: deve retornar erro. Se digitar 1, deve aparecer 4. Se
      digitar 2, deve aparecer 6. E assim por diante.
    </p>
  </>
);

export const studentsText: JSX.Element = (
  <>
    <p>
      Essa sessão será uma aplicação para controle de alunos, onde possibilite
      listar, editar, cadastrar e excluir alunos, além de poder atribuir cursos
      e visualizar todos os cursos de um aluno.
    </p>
    <p>
      A forma que fará isso será a que preferir, contudo é necessário que o
      aluno tenha uma página para ele na url:{' '}
      <a href="/alunos/1">/alunos/:id</a>.
    </p>
  </>
);

export const rules: string[] = [
  'Será fundamental utilizar as features do Next.JS sempre que possível;',
  'Tipe todos os objetos, states e funções com exceção do useEffect, uam vez que ele é sempre void;',
  'A usabilidade do usuário do admin é importante: Cadastro de cep usando a api viacep, não poder cadastrar e-mail repetido e não aparecer cursos já atribuídos é essencial.'
];
