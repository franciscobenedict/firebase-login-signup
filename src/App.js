import React                                            from 'react';
import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
import { useUser }                                      from 'reactfire';
import Navigation                                       from './components/Navigation';
import Footer                                           from './components/Footer';
import NotFound404                                      from './components/NotFound404';
import EmailVerificationView                            from './components/EmailVerificationView';
import EmailNotVerifiedView                             from './components/EmailNotVerifiedView';
import LandingView                                      from './components/LandingView';
import HomeView                                         from './components/HomeView';
import { AuthProvider }                                 from './store/Auth';
import PrivateRoute                                     from './store/PrivateRoute';

function App() {
  const currentUser = useUser();

  return (
    <AuthProvider >
      <Router>

        <Navigation />

        <Switch>
          <Route exact path="/" component={LandingView} />
          <Route exact path="/emailverification" component={EmailVerificationView} />
          <Route exact path="/emailnotverified" component={EmailNotVerifiedView} />
          {
            currentUser && <PrivateRoute exact path="/logged-in-users" component={HomeView} />
          }
          <Route path="*" component={NotFound404} />
        </Switch>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
