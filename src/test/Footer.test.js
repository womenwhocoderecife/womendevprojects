import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '../Footer';

it('renders without crashing', () => {
  const footer = document.createElement('footer');
  ReactDOM.render(<Footer />, footer);
  ReactDOM.unmountComponentAtNode(footer);
});
