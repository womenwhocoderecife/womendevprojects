import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Header from '.';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = document.createElement('header');
    ReactDOM.render(<Header />, header);
    ReactDOM.unmountComponentAtNode(header);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
