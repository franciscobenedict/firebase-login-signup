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

  const [toggleTechUsed, setToggleTechUsed] = useState(false);

  return (
    <>
      <Navigation />
      <main>
        <h1>{pageTitle}</h1>
        <p>Login with Email or Google.</p>
        <p>{ currentUser ? <>You are logged in</> : <>You are not logged in.</> }</p>

        <div className="profile_buttons_container">
          <button className="button submit_btn form_button" onClick={() => setToggleTechUsed(!toggleTechUsed)}>Technology used</button>
        </div>

        {
          toggleTechUsed &&
          <ul>
            <li>react</li>
            <li>javascript</li>
            <li>firebase</li>
            <li>firebase-authentication</li>
            <li>scss</li>
            <li>css3</li>
            <li>html5</li>
          </ul>
        }
      </main>
    </>
  )
}

export default LandingView;
