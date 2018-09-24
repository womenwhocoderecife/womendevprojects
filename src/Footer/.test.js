import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Footer from '.';

describe('Footer', () => {
  it('renders without crashing', () => {
    const footer = document.createElement('footer');
    ReactDOM.render(<Footer />, footer);
    ReactDOM.unmountComponentAtNode(footer);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
