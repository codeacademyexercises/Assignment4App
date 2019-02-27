import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormPortal from './FormPortal';

configure({ adapter: new Adapter() });

describe('<Header /> ', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<FormPortal FormName="Personal Details" createdOn="2019-02-27T06:47:39.504Z" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
