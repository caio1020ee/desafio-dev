import PostsOfBlog from '@/components/Organisms/PostsOfBlog';
import Dashboard from '@/components/Templates/Layouts/Dashboard';
import React from 'react';

const SEOPage: React.FC = () => {
  return (
    <Dashboard
      title="SEO Test"
      description={
        <p>Aqui você terá acesso à um post de artigo. Otimize-o o máximo que conseguir. Lembre-se é que a página seja bem vista pelo google, ou seja, não se esqueça da acessibilidade</p>
      }
    >
      <PostsOfBlog />
    </Dashboard>
  );
};

export default SEOPage;
