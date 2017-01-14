import React from 'react';
import { render } from 'react-dom';
import Slideshow from '../src/components/Slideshow';


describe("Slideshow tests", ()=>{
    it("renders without crashes", ()=>{
        const div = document.createElement("div");
        render(<Slideshow />, div);
    });
})