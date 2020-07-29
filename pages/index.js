import React from 'react';
import Home from '../components/views/Home';
import Layout from '../components/layouts/Layout';

const Page = (props) => {
  return
  <Layout><Home {...props} /></Layout>
};

export default Page;
