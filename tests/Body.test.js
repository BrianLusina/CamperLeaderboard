import React from 'react';
import { render } from 'react-dom';
import Body from '../src/components/body/Body';

describe("Body component tests", function(){
    var node, component;
    beforeEach(()=>{
        node = document.createElement("div");
        component = <Body apiroot="https://fcctop100.herokuapp.com/api/fccusers/"/>
    });

    it("renders without a crash", ()=>{
        render(component, node);
    });


})
