import React, {
  useState,
  useEffect,
} from 'react';
import Layout from './partials/Layout';

const HomeView = () => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageTitle('Logged in users');
  }, [pageTitle]);

  return (
    <Layout title={pageTitle} description="This is the Firebase authentication Login app">
      <div className="opaque_bg">
        <h1>{pageTitle}</h1>
        <p>You are now logged in.</p>
      </div>
    </Layout>
  )
}

export default HomeView;
