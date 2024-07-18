import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={containerStyles}>
      <Header />
      <main style={mainStyles}>{children}</main>
      <Footer />
    </div>
  );
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyles: React.CSSProperties = {
  flex: '1',
  padding: '20px',
};

export default Layout;
