import React from 'react';
import {shallow} from 'enzyme';
import Countdown from "./Countdown";


it('Couleur en fonction du nombre', () => {
    const wrapper = shallow(<Countdown counter={35}/>);
    const instance = wrapper.instance();
    expect(instance.state.color).toBe("blue");
});


it('Couleur en fonction du nombre', () => {
    const wrapper = shallow(<Countdown counter={10}/>);
    const instance = wrapper.instance();
    expect(instance.state.color).toBe("red");
});

it('Couleur en fonction du nombre', () => {
    const wrapper = shallow(<Countdown counter={15}/>);
    const instance = wrapper.instance();
    expect(instance.state.color).toBe("orange");
});
