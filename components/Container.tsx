import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Container;
