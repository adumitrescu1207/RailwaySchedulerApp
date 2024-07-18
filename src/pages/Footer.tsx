import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <a href="https://github.com/adumitrescu1207" target="_blank" rel="noopener noreferrer">My GitHub</a>
    </footer>
  );
};

const footerStyles: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#f8f9fa',
  borderTop: '1px solid #e0e0e0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;
