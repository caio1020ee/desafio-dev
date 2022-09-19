import React from 'react';
import { FormGroup, FormSection } from '@/components/Atoms/Layouts/Form/styles';

import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { buttonTheme, inputTheme } from '@/utils/Config';
import { toast } from 'react-toastify';
import { copy } from '@/utils/General';
import FormResult from '@/components/Molecules/Containers/FormResult';
import { getNoFibonacciNumber } from '@/helpers/logicFunctions';

const LogicTestForm: React.FC = () => {
  const [n, setN] = useState<number | null>(null);
  const [results, setResults] = useState<number | null>(null);

  const submit = (): void => {
    if (!n) {
      toast('Preencha o campo necessário', {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'error',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      return;
    }

    const noFibonacciNumber = getNoFibonacciNumber(n);
    setResults(noFibonacciNumber);
    return;
  };

  return (
    <>
      <FormSection>
        <main>
          <FormGroup>
            <TextField
              value={n}
              onChange={e => setN(parseFloat(e.target.value))}
              variant={inputTheme}
              margin="dense"
              type="number"
              label="Valor de X"
            />
          </FormGroup>
        </main>

        <footer>
          <Button
            fullWidth
            onClick={() => submit()}
            color="primary"
            variant={buttonTheme}
          >
            Calcular
          </Button>
        </footer>

        {!!results && (
          <FormResult>
            <FormGroup>
              <TextField
                onClick={() => copy(results.toString())}
                disabled
                value={results}
                variant={inputTheme}
                margin="dense"
                label="Resultado"
              />
            </FormGroup>
          </FormResult>
        )}
      </FormSection>
    </>
  );
};

export default LogicTestForm;
