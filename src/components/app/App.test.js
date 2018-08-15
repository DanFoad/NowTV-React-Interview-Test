import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';

const renderer = new ShallowRenderer()

it('renders correctly', () => {
  const tree = renderer
    .render(<App />)
  expect(tree).toMatchSnapshot()
});