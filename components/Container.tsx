import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = ({ children }: any) => {
  return (
    <div className='container'>
      <Head>
        <title>MONPOKER</title>
        <meta
          name='description'
          content='Votre gestionnaire pour organiser vos parties de poker'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
