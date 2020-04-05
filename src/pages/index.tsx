import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <h2>
        This is a quick Typescript, @emotion/styled, TailwindCSS, eslint Gatsby
        starter.
      </h2>
      <p>Now go build something great.</p>
    </Layout>
  );
}

export default IndexPage;
