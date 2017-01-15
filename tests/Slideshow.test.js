import React from 'react';
import { render } from 'react-dom';
import Slideshow from '../src/components/Slideshow';


describe("Slideshow tests", ()=>{
    const node, component;

    beforeEach(()=>{
        node = document.createElement("div");
        component = <Slideshow users={[]}/>;
    });

    it("renders without crashes", ()=>{
        render(component, node);
    });
})