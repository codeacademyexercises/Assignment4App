import React from 'react';
import renderer from 'react-test-renderer';
import * as axios from "axios";
import AllForms from './AllForms';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'axios';

configure({ adapter: new Adapter() });

jest.mock("axios");

const result=[{
    FormFields: "FirstName,LastName",
    FormName: "Personal Details",
    NumberOfFields: 2,
    createdAt: "2019-02-27T06:47:39.504Z",
    id: 2,
    updatedAt: "2019-02-27T06:47:39.504Z",},
    {
    FormFields: "Date,rating,feedback",
    FormName: "CodeAcademy Feedback",
    NumberOfFields: 3,
    createdAt: "2019-02-27T06:54:59.297Z",
    id: 3,
    updatedAt: "2019-02-27T06:54:59.297Z",
    },
]
describe('<AllForms /> ',()=>{
    it('snapshot test',()=>{
        axios.get.mockImplementation( () => Promise.resolve({ data: result }) );
        const tree = renderer.create(<AllForms />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('expect getFormData() to call axios',async ()=>{
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
            data: result,
            })
        );
        const wrapper = shallow(<AllForms />);
        const instance = wrapper.instance();
        await instance.getFormData('');
        expect(wrapper.state('FormDetails')).toEqual(result);
    });
    it('testing navigation is called when create new form buttom is clicked',()=>{
        const navigation = { navigate: jest.fn() };
        const wrapper = shallow(<AllForms navigation={navigation} />);
        const instance = wrapper.instance();
        wrapper.find('TouchableHighlight').simulate('press');
        expect(wrapper.prop('navigation').navigate).toHaveBeenCalled();
    })
})