import React from 'react';
import ReactDOM from 'react-dom';
import Ucpb from './Ucpb';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ucpb />, div);
  ReactDOM.unmountComponentAtNode(div);
});