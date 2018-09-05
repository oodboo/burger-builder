import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />',() => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>);
    });

    it('should render two <NavigationItem /> elements if not authenticated', ()=>{
        const findings = wrapper.find(NavigationItem);
        //console.log("FINDINGS", findings);
        expect(findings).toHaveLength(2);

    });

    it('should render 3 <NavigationItem /> elements if authenticated', ()=>{
        // const wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated:true});
        const findings = wrapper.find(NavigationItem);
        // console.log("FINDINGS", findings);
        expect(findings).toHaveLength(3);

    });

    it('should an exact Logout button', ()=>{
        wrapper.setProps({isAuthenticated:true}); //each test runs independently ...
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});