import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../';

describe('Header', () => {
  it('Should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});
