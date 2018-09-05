import React from 'react';
import { shallow } from 'enzyme';
import Widget from './Widget';

describe('<Widget />', () => {
  test('renders', () => {
    const wrapper = shallow(<Widget />);
    expect(wrapper).toMatchSnapshot();
  });
});
