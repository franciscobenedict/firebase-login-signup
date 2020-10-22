import React, {
  useState,
  useEffect,
} from 'react';
import { useUser } from 'reactfire';
import Navigation   from './Navigation';

const LandingView = () => {
  const currentUser = useUser();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageTitle('Landing page');
  }, [pageTitle]);

  return (
    <>
      <Navigation />
      <main>
        <h1>{pageTitle}</h1>
        <p>Login with Email or Google.</p>
        <p>{ currentUser ? <>You are logged in</> : <>You are not logged in.</> }</p>
      </main>
    </>
  )
}

export default LandingView;
