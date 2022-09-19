import StudentTable from '@/components/Organisms/Tables/StudentTable';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import React from 'react';

const Operations: React.FC = () => {
  return (
    <Dashboard
      title="Alunos"
      description={
        <p>Aqui você terá acesso à todos os alunos do nosso banco de dados</p>
      }
    >
      <StudentTable />
    </Dashboard>
  );
};

export default Operations;
