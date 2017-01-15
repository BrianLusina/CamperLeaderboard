import React from 'react';
import { render } from 'react-dom';
import GridWrap from '../src/components/GridWrap';

describe("GridWrap Tests", function(){
  const node, component;
  
  beforeEach(function(){
      node = document.createElement('div');
      component = <GridWrap users={[]}/>
  });
  
  it('Header renders without crashing', () => {
    render(component, node);
  });

})
