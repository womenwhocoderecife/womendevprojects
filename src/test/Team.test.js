import React from 'react';
import ReactDOM from 'react-dom';

import Team from '../Main/Team';

describe("Team", () => {

  it('renders without crashing', () => {
    const team = document.createElement('team');
    ReactDOM.render(<Team
      Team />, team);
    ReactDOM.unmountComponentAtNode(team);
  });
});
