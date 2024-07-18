import React, { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main style={mainStyles}>{children}</main>
      <Footer />
    </>
  );
};

const mainStyles: React.CSSProperties = {
  flex: '1',
  padding: '20px',
};

export default Layout;
