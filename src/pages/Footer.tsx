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
  backgroundColor: '#F5C09C',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;
