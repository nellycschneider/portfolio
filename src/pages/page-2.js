import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Container>
        <h1>Portfolio</h1>
        <p>Welcome to my portfolio</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;