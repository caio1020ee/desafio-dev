import DashboardSidebar from '@/components/Organisms/Sibebars/DashboardSidebar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Container, Description } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/dist/client/router';

interface Props {
  title: string;
  description: JSX.Element;
}

const Dashboard: React.FC<Props> = props => {
  const router = useRouter();

  return (
    <>
      <Container>
        <aside>
          <DashboardSidebar section={router.asPath} />
        </aside>
        <main>
          <header>
            <h1>{props.title}</h1>
            <Description>{props.description}</Description>
          </header>
          {props.children}
        </main>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
