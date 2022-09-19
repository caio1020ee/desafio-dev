import Intro from '@/components/Organisms/Containers/Intro';
import OperatorsForm from '@/components/Organisms/Forms/StudentsForm';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const Operations: React.FC = () => {
  return (
    <Dashboard
      title="Home"
      description={
        <p>Olá, aqui será descrito todas as atividades a serem feitas</p>
      }
    >
      <Intro />
    </Dashboard>
  );
};

export default Operations;
