import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateNewFormPage from './CreateNewFormPage';

configure({ adapter: new Adapter() });

describe('<Header /> ', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<CreateNewFormPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
