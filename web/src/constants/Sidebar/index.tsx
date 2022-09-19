import { FaUser } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/Si';
import { BsGraphUp } from 'react-icons/bs';
import React from 'react';

export const sidebarData: SidebarItemProps[] = [
  {
    uid: '/alunos',
    title: 'Alunos',
    icon: <FaUser size={25} />
  },
  {
    uid: '/logic-test',
    title: 'Teste de lógica',
    icon: <BsGraphUp size={25} />
  },
  {
    uid: '/seo',
    title: 'SEO - Teste',
    icon: <SiGoogleanalytics size={25} />
  }
];
