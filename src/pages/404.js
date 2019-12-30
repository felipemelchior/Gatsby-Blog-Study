import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404</h1>
      <p>Ops... não tem nada aqui</p>
    </Layout>
  );
}
