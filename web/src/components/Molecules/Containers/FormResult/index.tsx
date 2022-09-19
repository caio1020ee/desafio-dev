import React from 'react';

import { Container } from './styles';

interface Props {
  noTitle?: boolean;
}

const FormResult: React.FC<Props> = props => {
  return (
    <Container>
      {!props.noTitle && (
        <header>
          <h3>Resultados</h3>
        </header>
      )}

      <main>{props.children}</main>
    </Container>
  );
};

export default FormResult;
