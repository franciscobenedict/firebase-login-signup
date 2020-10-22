import React, {
  useState,
  useEffect,
} from 'react';

const HomeView = () => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageTitle('Home page');
  }, [pageTitle]);

  return (
    <>
      <main>
        <h1>{pageTitle}</h1>
        <p>You are now logged in.</p>
      </main>
    </>
  )
}

export default HomeView;
