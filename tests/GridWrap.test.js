import React from 'react';
import ReactDOM from 'react-dom';
import GridWrap from '../src/components/GridWrap';

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GridWrap />, div);
});
