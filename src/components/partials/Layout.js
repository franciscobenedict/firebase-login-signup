import React              from  'react';
import { Helmet }         from  'react-helmet-async';
import Navigation         from  './Navigation';
import Footer             from  './Footer';
import                          'bootswatch/dist/lux/bootstrap.css';

const Layout = ( { title, description, children } ) => {

  return (
    <>
      <Helmet>
        <title>{ title ? "Francisco Benedict - " + title : "Firebase login authentication" }</title>
        <meta name = "description" content={ description || "Firebase login authentication app by Francisco Benedict" } />
      </Helmet>

      <div className="content">
        <Navigation />
        <main className="">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
