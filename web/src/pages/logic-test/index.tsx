import LogicTestForm from '@/components/Organisms/Forms/LogicTestForm';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import { logicTestText } from '@/constants/Texts';
import React from 'react';

const Operations: React.FC = () => {
  return (
    <Dashboard
      title="Teste de Lógica"
      description={
        <>
          <p> Aqui você terá acesso ao teste de lógica.</p>
          {logicTestText}
        </>
      }
    >
      <LogicTestForm />
    </Dashboard>
  );
};

export default Operations;
